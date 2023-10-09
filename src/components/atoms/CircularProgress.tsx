import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {theme} from '../../styles/theme';
import {CircularProgressStyle} from '../../styles/atoms';

function CircularProgress() {
  return (
    <View style={CircularProgressStyle.container}>
      <ActivityIndicator size="large" color={theme.colors.border} />
    </View>
  );
}

export default CircularProgress;
