import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerTintColor: '#212121',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: '500',
    fontSize: 17,
  },
  headerTitleContainerStyle: {
    justifyContent: 'flex-end',
    paddingBottom: 11,
    paddingHorizontal: 16,
  },
  headerRightContainerStyle: {
    justifyContent: 'flex-end',
    paddingBottom: 11,
    paddingHorizontal: 16,
  },
  headerLeftContainerStyle: {
    justifyContent: 'flex-end',
    paddingBottom: 11,
    paddingHorizontal: 16,
  },
  tabBarStyle: {
    paddingHorizontal: 73,
  },
  tabBarItemStyle: {
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
