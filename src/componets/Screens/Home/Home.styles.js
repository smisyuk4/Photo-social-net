import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    color: '#212121',
    secColor: '#BDBDBD',
  },
  tabBar: {
    height: 83,
    paddingTop: 9,
    justifyContent: 'top',
  },
  tabItem: {
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
