import React from 'react';
import Header from '../components/molecules/Header';
import HomeTemplate from '../components/templates/HomeTemplate';
import {get_tracks} from '../api/Home';
import {Track} from '../interfaces/tracks.interface';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

function Home() {
  const [tracks, set_tracks] = React.useState<Track[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const country = useSelector((state: any) => state.country.country);

  React.useEffect(() => {
    const fetch_tracks = async () => {
      try {
        setLoading(true);
        const tracksResponse = await get_tracks(country);
        set_tracks(tracksResponse);
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Ocurrió un error al obtener las canciones');
      } finally {
        setLoading(false);
      }
    };
    fetch_tracks();
  }, [country]);

  return (
    <>
      <Header />
      <HomeTemplate isLoading={isLoading} tracks={tracks} />
    </>
  );
}

export default Home;
