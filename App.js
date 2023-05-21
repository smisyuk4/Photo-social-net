import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as SplashScreen from 'expo-splash-screen';
import { Feather } from '@expo/vector-icons';
import {
  LoaderScreen,
  RegistrationScreen,
  LoginScreen,
  Home,
  CommentsScreen,
  MapScreen,
} from './src/componets';

// SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

const screenOptions = ({ navigation, route }) => ({
  headerShown: true,
  headerTintColor: styles.header.colorPrimary,
  headerTitleAlign: styles.headerTitle.alignItems,
  headerTitleStyle: styles.headerTitle,
  headerTitleContainerStyle: styles.headerContainerItem,
  headerRightContainerStyle: styles.headerContainerItem,
  headerLeftContainerStyle: styles.headerContainerItem,
  headerLeft: () => (
    <Feather
      name="arrow-left"
      size={24}
      color={styles.header.colorPrimary}
      onPress={navigation.goBack}
    />
  ),
  headerRight: () => (
    <Feather
      name="log-out"
      size={24}
      color={styles.header.colorSecondary}
      onPress={navigation.goBack}
    />
  ),
});

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
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: 'Коментарі',
          headerRight: null,
        }}
      />

      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Карта',
          headerRight: null,
        }}
      />
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

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
};

export default App;

export const styles = StyleSheet.create({
  header: {
    colorPrimary: '#212121',
    colorSecondary: '#BDBDBD',
  },
  headerTitle: {
    alignItems: 'center',
    fontWeight: '500',
    fontSize: 17,
  },
  headerContainerItem: {
    justifyContent: 'flex-end',
    paddingBottom: 11,
    paddingHorizontal: 16,
  },
});
