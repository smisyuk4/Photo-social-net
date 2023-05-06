import { TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';
import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerStyle: {
    // backgroundColor: "#f4511e",
    // 'padding-bottom': 30,
  },
  headerTintColor: styles.header.color,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 500,
    fontSize: 17,
  },

  tabBarIcon: ({ focused, color, size }) => {
    let tabBarItem;

    if (route.name === 'Post') {
      tabBarItem = focused ? (
        <View style={styles.tabItem}>
          <AntDesign
            name="appstore-o"
            size={size}
            color={styles.tabItem.activeFill}
          />
        </View>
      ) : (
        <AntDesign
          name="appstore-o"
          size={size}
          color={styles.tabItem.inActiveFill}
        />
      );
    }

    if (route.name === 'Create') {
      tabBarItem = focused ? (
        <View style={styles.tabItem}>
          <AntDesign
            name="plus"
            size={size}
            color={styles.tabItem.activeFill}
          />
        </View>
      ) : (
        <AntDesign
          name="plus"
          size={size}
          color={styles.tabItem.inActiveFill}
        />
      );
    }

    if (route.name === 'Profile') {
      tabBarItem = focused ? (
        <View style={styles.tabItem}>
          <Feather name="user" size={size} color={styles.tabItem.activeFill} />
        </View>
      ) : (
        <Feather name="user" size={size} color={styles.tabItem.inActiveFill} />
      );
    }

    return tabBarItem;
  },
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
});

export const Home = ({ navigation, route, options, back }) => {
  return (
    <Tabs.Navigator initialRouteName="Post" screenOptions={screenOptions}>
      <Tabs.Screen
        name="Post"
        component={PostsScreen}
        options={{
          title: 'Публікації',

          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color={styles.header.secColor}
              onPress={navigation.goBack}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color={styles.header.color}
              onPress={navigation.goBack}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Кабінет користувача',
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color={styles.header.color}
              onPress={navigation.goBack}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
