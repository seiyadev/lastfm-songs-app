import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import Logo from '../atoms/Logo';
import {HeaderStyle} from '../../styles/molecules';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation.type';

function Header() {
  const [isClicked, setIsClicked] = React.useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('PROFILE');
  };

  return (
    <View style={HeaderStyle.container}>
      <Logo />
      <TouchableHighlight
        onPress={handlePress}
        onPressOut={() => setIsClicked(!isClicked)}
        onPressIn={() => setIsClicked(!isClicked)}
        underlayColor="transparent">
        <Text
          style={
            isClicked
              ? HeaderStyle.profile_text_selected
              : HeaderStyle.profile_text
          }>
          Mi perfil
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Header;
