import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';
import { checkIsDirtyForm } from '../../helpers/checkIsDirtyForm';
import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

const screenOptions = ({ navigation, route }) => ({
  headerLeft: () => (
    <Feather
      name="arrow-left"
      size={24}
      color={styles.headerTintColor}
      onPress={() => {
        checkIsDirtyForm(navigation, route);
      }}
    />
  ),
  tabBarIcon: ({ focused, color, size }) => {
    let tabBarItem;

    if (route.name === 'PostsScreen') {
      tabBarItem = focused ? (
        <View style={styles.tabItemActive}>
          <AntDesign
            name="appstore-o"
            size={size}
            color={styles.tabItemActive.activeFill}
          />
        </View>
      ) : (
        <AntDesign
          name="appstore-o"
          size={size}
          color={styles.tabItemActive.inActiveFill}
        />
      );
    }

    if (route.name === 'Create') {
      tabBarItem = focused ? (
        <View style={styles.tabItemActive}>
          <AntDesign
            name="plus"
            size={size}
            color={styles.tabItemActive.activeFill}
          />
        </View>
      ) : (
        <AntDesign
          name="plus"
          size={size}
          color={styles.tabItemActive.inActiveFill}
        />
      );
    }

    if (route.name === 'Profile') {
      tabBarItem = focused ? (
        <View style={styles.tabItemActive}>
          <Feather
            name="user"
            size={size}
            color={styles.tabItemActive.activeFill}
          />
        </View>
      ) : (
        <Feather
          name="user"
          size={size}
          color={styles.tabItemActive.inActiveFill}
        />
      );
    }

    return tabBarItem;
  },
  ...styles,
  tabBarShowLabel: false,
});

export const Home = ({ navigation, route, options }) => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={screenOptions}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          tabBarStyle: { display: 'none' },
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};
