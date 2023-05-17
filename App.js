import { useFonts } from 'expo-font';
import { TouchableOpacity, View, Text, Button } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  LoaderScreen,
  RegistrationScreen,
  LoginScreen,
  Home,
} from './src/componets';

// SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();
// const AuthStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
      </MainStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });

  const routing = useRoute(true); // null

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <LoaderScreen />;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
