import YTMusic from 'ytmusic-api';
const ytmusic = new YTMusic();

async function run() {
  await ytmusic.initialize();
  try {
    const playlist = await ytmusic.getAlbum('VLPL4fGSI1pccg07_I8C_U0_P8M9Nmlf48yG');
    console.log('Album:', JSON.stringify(playlist, null, 2));
  } catch (e) {
    console.error('Error:', e);
  }
}
run();
