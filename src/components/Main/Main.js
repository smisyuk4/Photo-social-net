import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStateChange } from '../../../redux/selectors';
import { authStateChangeUser } from '../../../redux/auth/authOperations';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { RegistrationScreen } from '../../Screens/RegistrationScreen';
import { LoginScreen } from '../../Screens/LoginScreen';
import { Home } from '../../Screens/Home';
import { CommentsScreen } from '../../Screens/CommentsScreen';
import { MapScreen } from '../../Screens/MapScreen';

const styles = StyleSheet.create({
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
});

export const Main = () => {
  const stateChange = useSelector(selectStateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        {!stateChange ? (
          <>
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
