import AsyncStorage from '@react-native-async-storage/async-storage';
import {Track} from '../interfaces/tracks.interface';

export async function get_tracks() {
  try {
    const response = await AsyncStorage.getItem('tracks');
    const tracks = JSON.parse(response!);
    return tracks.reverse();
  } catch (error) {
    return error;
  }
}

export async function set_tracks(track: Track) {
  try {
    const prevTracks = await AsyncStorage.getItem('tracks');
    if (prevTracks !== null) {
      const prevTracksArray = JSON.parse(prevTracks);
      if (prevTracksArray.length > 9) {
        prevTracksArray.shift();
      }
      if (prevTracksArray.find((item: Track) => item.name === track.name)) {
        return console.log('Track already exists');
      }
      const newTracksArray = [...prevTracksArray, track];
      await AsyncStorage.setItem('tracks', JSON.stringify(newTracksArray));
    } else {
      await AsyncStorage.setItem('tracks', JSON.stringify([track]));
    }
  } catch (error) {
    return error;
  }
}
