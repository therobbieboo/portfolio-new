const http = require('http');
const fetch = require('node-fetch');

const PORT = process.env.PORT || process.env.RAILWAY_PORT || 3000;

// MiniMax config from environment
const API_KEY = process.env.MINIMAX_API_KEY || "sk-api-7-G6hmSns0tnEvGcvYemJOWLWBprC3NR2x3VYsf05ATa4Q3b52wTX4oNw7_slGKOmWI9W4ZFPqMsVGGxkmLz_LjikjreHqYF4gJu--YkLDsY_-kksoXGHh8";
const GROUP_ID = process.env.MINIMAX_GROUP_ID || "2015394789192643334";

// Convert hex to bytes
function hexToBytes(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
}

// Generate TTS
async function generateTTS(text, options = {}) {
    const model = options.model || "speech-2.8-hd";
    const voice = options.voice || "Chinese (Mandarin)_Cute_Spirit";
    const speed = options.speed || 1;
    const emotion = options.emotion || "warm";
    
    const response = await fetch(`https://api.minimax.io/v1/t2a_v2?GroupId=${GROUP_ID}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: model,
            text: text,
            voice_setting: {
                voice_id: voice,
                speed: speed,
                emotion: emotion
            },
            audio_setting: {
                format: "mp3",
                sample_rate: 32000,
                bitrate: 128000
            }
        })
    });
    
    const data = await response.json();
    
    if (data.data && data.data.audio) {
        return hexToBytes(data.data.audio);
    }
    
    throw new Error(data.base_resp?.status_msg || 'No audio data');
}

// HTTP Server
const server = http.createServer(async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Health check
    if (req.url === '/health' || req.url === '/_health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', time: Date.now() }));
        return;
    }
    
    // Root endpoint
    if (req.url === '/' || req.url === '') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OpenPapa TTS Server is running!');
        return;
    }
    
    // TTS endpoint
    if (req.url === '/tts' && req.method === 'POST') {
        try {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
                try {
                    const { text, ...options } = JSON.parse(body);
                    
                    if (!text) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'text is required' }));
                        return;
                    }
                    
                    console.log('Generating TTS for:', text.substring(0, 50));
                    const audioBytes = await generateTTS(text, options);
                    
                    res.writeHead(200, { 
                        'Content-Type': 'audio/mp3',
                        'Content-Length': audioBytes.length
                    });
                    res.end(Buffer.from(audioBytes));
                } catch (err) {
                    console.error('TTS error:', err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: err.message }));
                }
            });
        } catch (err) {
            console.error('Request error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
        }
        return;
    }
    
    // 404
    res.writeHead(404);
    res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 TTS Server running on port ${PORT}`);
    console.log(`   Endpoint: POST /tts with { "text": "你好" }`);
    console.log(`   Returns: audio/mp3`);
});
