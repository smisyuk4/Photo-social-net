import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './src/routes';
import { LoaderScreen } from './src/Screens/LoaderScreen';

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });
  const routing = useRoute(true);

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
