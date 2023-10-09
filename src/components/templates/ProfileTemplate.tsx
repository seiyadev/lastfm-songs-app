import React from 'react';
import {NativeScrollEvent, ScrollView, Text, View} from 'react-native';
import {ProfileTemplateStyle} from '../../styles/template';
import TrackList from '../organisms/TrackList';
import CircularProgress from '../atoms/CircularProgress';
import {Track} from '../../interfaces/tracks.interface';

function ProfileTemplate({
  isLoading,
  tracks,
  isNull,
}: {
  isLoading: boolean;
  tracks: Track[];
  isNull: boolean;
}) {
  const [visibleTracks, setVisibleTracks] = React.useState<number>(10);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <ScrollView
      style={ProfileTemplateStyle.container}
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          setVisibleTracks(visibleTracks + 10);
        }
      }}
      scrollEventThrottle={400}>
      <View style={ProfileTemplateStyle.title_container}>
        <Text style={ProfileTemplateStyle.title}>Mi perfil</Text>
        <Text style={ProfileTemplateStyle.subtitle}>
          Últimas canciones reproducidas
        </Text>
      </View>
      {isNull ? (
        <Text style={ProfileTemplateStyle.not_found_tracks}>
          No se encontraron canciones. Escucha algo para que aparezca aquí.
        </Text>
      ) : (
        <TrackList tracks={tracks.slice(0, visibleTracks)} />
      )}
    </ScrollView>
  );
}

export default ProfileTemplate;
