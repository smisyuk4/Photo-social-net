import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';
import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "Profile") {
    //       iconName = focused
    //         ? "ios-information-circle"
    //         : "ios-information-circle-outline";
    //     } else if (route.name === "Settings") {
    //       iconName = focused ? "ios-list-box" : "ios-list";
    //     }
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray",
    // }}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="Create posts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
