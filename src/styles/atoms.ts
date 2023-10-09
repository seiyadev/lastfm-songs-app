import {StyleSheet} from 'react-native';

export const LogoStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 4,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});

export const SelectCountryStyle = StyleSheet.create({
  container: {
    width: 170,
  },
  text: {
    fontSize: 14,
  },
});

export const CircularProgressStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
