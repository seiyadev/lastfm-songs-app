import React from 'react';
import Track from '../molecules/Track';
import {FlatList} from 'react-native';
import {Track as TrackInterface} from '../../interfaces/tracks.interface';

function TrackList({tracks}: {tracks: TrackInterface[]}) {
  return (
    <FlatList
      data={tracks}
      renderItem={({item}) => <Track track={item} />}
      keyExtractor={item => item.name}
      style={{
        paddingHorizontal: 12,
        paddingBottom: 160,
      }}
      contentContainerStyle={{
        gap: 24,
      }}
      scrollEnabled={false}
    />
  );
}

export default TrackList;
