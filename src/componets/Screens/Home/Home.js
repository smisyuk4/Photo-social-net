import { TouchableOpacity, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';
import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let tabBarItem;

    if (route.name === 'Posts') {
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

    if (route.name === 'Create posts') {
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
          <AntDesign
            name="user"
            size={size}
            color={styles.tabItem.activeFill}
          />
        </View>
      ) : (
        <AntDesign
          name="user"
          size={size}
          color={styles.tabItem.inActiveFill}
        />
      );
    }

    return tabBarItem;
  },
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
});

export const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="Create posts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
