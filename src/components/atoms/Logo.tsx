import React from 'react';
import {Image, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LogoStyle} from '../../styles/atoms';

function Logo() {
  return (
    <View style={LogoStyle.container}>
      <Image
        source={require('../../../assets/Lastfm_logo.png')}
        style={LogoStyle.logo}
      />
      <MaterialCommunityIcons name="api" size={20} color="#ffdc5d" />
    </View>
  );
}

export default Logo;
