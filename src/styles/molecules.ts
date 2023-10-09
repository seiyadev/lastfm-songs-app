import {StyleSheet, TextStyle} from 'react-native';
import {theme} from './theme';

const profile_text: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
};

export const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile_text,
  profile_text_selected: {
    ...profile_text,
    color: theme.colors.primary,
  },
});

export const TrackStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 4,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  text_container: {
    flexDirection: 'column',
    gap: 2,
  },
  track_name: {
    fontWeight: '900',
    fontSize: 16,
  },
  track_artist: {
    fontWeight: '500',
    fontSize: 15,
    color: theme.colors.border,
  },
  subinfo_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  track_subinfo: {
    fontWeight: '500',
    fontSize: 14,
    color: '#606f83',
  },
});
