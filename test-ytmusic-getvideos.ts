import YTMusic from 'ytmusic-api';
const ytmusic = new YTMusic();

async function run() {
  await ytmusic.initialize();
  try {
    const list = await ytmusic.getPlaylistVideos('RDCLAK5uy_nlvLeSaigisz6SiQZBdGa7O7GPTYWBQ8E');
    console.log('Videos:', list.length);
  } catch (e) {
    console.error('Error:', e);
  }
}
run();
