import YTMusic from 'ytmusic-api';
const ytmusic = new YTMusic();

async function run() {
  await ytmusic.initialize();
  try {
    const list = await ytmusic.search('community playlists', 'PLAYLIST');
    console.log('Search:', JSON.stringify(list, null, 2));
  } catch (e) {
    console.error('Error:', e);
  }
}
run();
