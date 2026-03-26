const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: 'JZn62M7d38VUf4Mp15mp7nLtm',
  appSecret: 'FjCIXLwJlr2iaufv1g6RgvlAGNUkQRWrOTLRhSnzyMixg2vIOE',
  accessToken: '1632650511521566720-3B2PloiJJ00YONFxGcOMHVdyPfluM3',
  accessSecret: 'g7nCzP17BVn89XZUVjLApVtsLkGc4zZXMdEuil2zD8dMH',
});

async function testTweet() {
  try {
    // Try v1.1 API
    const tweet = await client.v1.tweet('Hello world! This is a test tweet from FeedbackMind AI 🤖');
    console.log('Tweet posted successfully!');
    console.log('Tweet ID:', tweet.id_str);
    console.log('Tweet URL:', `https://twitter.com/i/status/${tweet.id_str}`);
  } catch (error) {
    console.error('Error posting tweet:');
    console.error(error.data || error);
  }
}

testTweet();
