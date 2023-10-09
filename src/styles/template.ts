import {StyleSheet} from 'react-native';

export const ProfileTemplateStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title_container: {
    gap: 4,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 16,
  },
  not_found_tracks: {
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 24,
    color: '#999',
  },
});

export const HomeTemplateStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
  },
  title_container: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    width: '100%',
  },
});
