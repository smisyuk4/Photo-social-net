import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as SplashScreen from 'expo-splash-screen';
import {
  LoaderScreen,
  RegistrationScreen,
  LoginScreen,
  Home,
} from './src/componets';

// SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

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

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });

  const routing = useRoute(true);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <LoaderScreen />;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
