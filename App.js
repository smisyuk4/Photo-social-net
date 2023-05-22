import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useRoute } from './src/routes';
import { LoaderScreen } from './src/Screens/LoaderScreen';

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => setUser(user));

  const routing = useRoute(user);

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
