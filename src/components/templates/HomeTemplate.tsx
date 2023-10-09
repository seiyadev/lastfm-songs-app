import React from 'react';
import {NativeScrollEvent, ScrollView, Text, View} from 'react-native';
import {HomeTemplateStyle} from '../../styles/template';
import SelectCountry from '../atoms/SelectCountry';
import TrackList from '../organisms/TrackList';
import CircularProgress from '../atoms/CircularProgress';
import {Track} from '../../interfaces/tracks.interface';

function HomeTemplate({
  isLoading,
  tracks,
}: {
  isLoading: boolean;
  tracks: Track[];
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
      style={HomeTemplateStyle.container}
      onScroll={({nativeEvent}) => {
        if (isCloseToBottom(nativeEvent)) {
          setVisibleTracks(visibleTracks + 10);
        }
      }}
      scrollEventThrottle={400}>
      <View style={HomeTemplateStyle.title_container}>
        <Text style={HomeTemplateStyle.title}>
          Canciones top de esta semana
        </Text>
        <SelectCountry />
      </View>
      <TrackList tracks={tracks.slice(0, visibleTracks)} />
    </ScrollView>
  );
}

export default HomeTemplate;
