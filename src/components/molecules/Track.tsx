import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {TrackStyle} from '../../styles/molecules';
import {Track as TrackInterface} from '../../interfaces/tracks.interface';
import {get_track_image} from '../../api/Home';
import CircularProgress from '../atoms/CircularProgress';
import {theme} from '../../styles/theme';
import {set_tracks} from '../../api/Profile';
import {useRoute} from '@react-navigation/native';

function Track({track}: {track: TrackInterface}) {
  const route = useRoute();
  const [duration, setDuration] = React.useState<string>('03:40 min');
  const [listeners, setListeners] = React.useState<string>('1.5M');
  const [trackImage, setTrackImage] = React.useState<string>(
    'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg',
  );

  React.useEffect(() => {
    const fetchTrackImage = async () => {
      const trackImageResponse = await get_track_image(
        track.name,
        track.artist.name,
      );
      setTrackImage(trackImageResponse.toString());
    };
    fetchTrackImage();
  }, [track.name, track.artist.name]);

  React.useEffect(() => {
    const durationNumber = Number(track.duration);
    const minutes = Math.floor(durationNumber / 60);
    const seconds = durationNumber - minutes * 60;
    setDuration(`${minutes}:${seconds} min`);
  }, [track.duration]);

  React.useEffect(() => {
    const listenersNumber = Number(track.listeners);
    if (listenersNumber > 1000000) {
      setListeners(`${(listenersNumber / 1000000).toFixed(1)}M`);
    } else if (listenersNumber > 1000) {
      setListeners(`${(listenersNumber / 1000).toFixed(1)}K`);
    } else {
      setListeners(`${listenersNumber}`);
    }
  }, [track.listeners]);

  return (
    <TouchableHighlight
      onPress={async () => {
        if (route.name === 'HOME') {
          await set_tracks(track);
        }
      }}
      underlayColor={theme.colors.card}>
      <View style={TrackStyle.container}>
        {trackImage ? (
          <Image
            source={{
              uri: trackImage,
            }}
            style={TrackStyle.image}
          />
        ) : (
          <CircularProgress />
        )}
        <View style={TrackStyle.text_container}>
          <Text style={TrackStyle.track_name}>{track.name}</Text>
          <Text style={TrackStyle.track_artist}>
            {track.artist.name || 'Artista desconocido'}
          </Text>
          <View style={TrackStyle.subinfo_container}>
            <Text style={TrackStyle.track_subinfo}>{duration}</Text>
            <Text style={TrackStyle.track_subinfo}>|</Text>
            <Text style={TrackStyle.track_subinfo}>{listeners} de oyentes</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Track;
