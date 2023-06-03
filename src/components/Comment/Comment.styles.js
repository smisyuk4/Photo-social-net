import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    padding: 2,
    gap: 5,
  },
  commentWrp: {
    flex: 10,
    padding: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
  },
  avatarWrp: {
    flex: 1.4,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
  },
  login: {
    color: '#fff',
  },
  comment: {},
  date: {
    alignSelf: 'flex-end',
    color: '#BDBDBD',
  },
});
