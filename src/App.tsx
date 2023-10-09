import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from './pages/Home';
import {theme} from './styles/theme';
import Song from './pages/Song';
import Profile from './pages/Profile';
import {Provider} from 'react-redux';
import {store} from './store';
import TrackPlayer from './components/organisms/TrackPlayer';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const cardStyleInterpolator: StackCardStyleInterpolator = ({
    current,
    layouts,
  }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  };

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="HOME">
          <Stack.Screen
            name="HOME"
            component={Home}
            options={{
              headerShown: false,
              cardStyleInterpolator,
            }}
          />
          <Stack.Screen
            name="SONG"
            component={Song}
            options={{
              headerShown: false,
              cardStyleInterpolator,
            }}
          />
          <Stack.Screen
            name="PROFILE"
            component={Profile}
            options={{
              title: '',
              headerStyle: {
                elevation: 0,
              },
              cardStyleInterpolator,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <TrackPlayer />
    </Provider>
  );
}

export default App;
