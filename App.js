import { useFonts } from 'expo-font';
import { TouchableOpacity, View, Text, Button } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen, LoginScreen, Home } from './src/componets';

// SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
