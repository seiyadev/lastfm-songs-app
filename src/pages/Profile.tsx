import React from 'react';
import ProfileTemplate from '../components/templates/ProfileTemplate';
import {Track} from '../interfaces/tracks.interface';
import {Alert} from 'react-native';
import {get_tracks} from '../api/Profile';

function Profile() {
  const [tracks, setTracks] = React.useState<Track[]>([]);
  const [isNull, setIsNull] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetch_tracks = async () => {
      try {
        const tracksResponse = await get_tracks();
        if (tracksResponse && Array.isArray(tracksResponse)) {
          setTracks(tracksResponse);
        } else {
          setIsNull(true);
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Ocurrió un error al obtener las canciones');
      } finally {
        setLoading(false);
      }
    };
    fetch_tracks();
  }, []);

  React.useEffect(() => {}, []);
  return (
    <ProfileTemplate tracks={tracks} isLoading={isLoading} isNull={isNull} />
  );
}

export default Profile;
