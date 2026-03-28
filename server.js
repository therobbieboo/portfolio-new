const http = require('http');
const fetch = require('node-fetch');

const PORT = process.env.PORT || process.env.RAILWAY_PORT || 3000;

// MiniMax config from environment
const API_KEY = process.env.MINIMAX_API_KEY || "";
const GROUP_ID = process.env.MINIMAX_GROUP_ID || "2015394789192643334";

// CORS headers - set for all responses
const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
};

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

// Send response with CORS headers
function sendResponse(res, statusCode, contentType, body) {
    const headers = { ...CORS_HEADERS };
    if (contentType) headers['Content-Type'] = contentType;
    res.writeHead(statusCode, headers);
    res.end(body);
}

// HTTP Server
const server = http.createServer(async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        sendResponse(res, 200, 'application/json', '');
        return;
    }
    
    // Health check
    if (req.url === '/health' || req.url === '/_health') {
        sendResponse(res, 200, 'application/json', JSON.stringify({ status: 'ok', time: Date.now() }));
        return;
    }
    
    // Root endpoint
    if (req.url === '/' || req.url === '') {
        sendResponse(res, 200, 'text/plain', 'OpenPapa TTS Server is running!');
        return;
    }
    
    // TTS endpoint
    if (req.url === '/tts' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const { text, ...options } = JSON.parse(body);
                
                if (!text) {
                    sendResponse(res, 400, 'application/json', JSON.stringify({ error: 'text is required' }));
                    return;
                }
                
                console.log('Generating TTS for:', text.substring(0, 50));
                const audioBytes = await generateTTS(text, options);
                
                sendResponse(res, 200, 'audio/mp3', Buffer.from(audioBytes));
                
            } catch (err) {
                console.error('TTS error:', err);
                sendResponse(res, 500, 'application/json', JSON.stringify({ error: err.message }));
            }
        });
        return;
    }
    
    // 404
    sendResponse(res, 404, 'text/plain', 'Not found');
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 TTS Server running on port ${PORT}`);
    console.log(`   API Key: ${API_KEY ? 'Set' : 'NOT SET'}`);
    console.log(`   Endpoint: POST /tts with { "text": "你好" }`);
    console.log(`   Returns: audio/mp3`);
});
