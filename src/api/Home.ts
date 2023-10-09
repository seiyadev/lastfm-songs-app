import axios from 'axios';
import {BASE_URL} from '@env';

export async function get_tracks(country: string) {
  try {
    const response = await axios.get(
      `${BASE_URL}&method=geo.gettoptracks&country=${country}`,
    );
    return response.data.tracks.track;
  } catch (error) {
    return error;
  }
}

export async function get_track_image(track_name: string, artist_name: string) {
  try {
    track_name = track_name.replace(/ /g, '+');
    artist_name = artist_name.replace(/ /g, '+');
    const response = await axios.get(
      `${BASE_URL}&method=track.getInfo&track=${track_name}&artist=${artist_name}`,
    );
    if (
      response.data.error === 6 ||
      response.data.track.album.image[3]['#text'] === ''
    ) {
      return 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_300/https://flotiumgps.com/wp-content/uploads/2018/10/placeholder-300x300.jpg';
    } else {
      return response.data.track.album.image[3]['#text'];
    }
  } catch (error) {
    return error;
  }
}
