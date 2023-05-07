import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    color: '#212121',
  },
  headerTitle: {
    alignItems: 'center',
    fontWeight: 500,
    fontSize: 17,
  },
  headerContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 11,
  },
  headerExitBtn: {
    color: '#BDBDBD',
  },
  tabBarItem: {
    paddingTop: 9,
    paddingBottom: 35,
    height: 85,
  },
  tabItemActive: {
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    activeFill: '#FFFFFF',
    inActiveFill: '#212121',
  },
});
