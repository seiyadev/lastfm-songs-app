import {TrackArtist, TrackStreamable} from '../types/track.type';

export interface Track {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: TrackStreamable;
  artist: TrackArtist;
}
