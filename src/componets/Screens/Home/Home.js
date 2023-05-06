import { TouchableOpacity, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';
import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

// const screenOptions = {
// initialRoute: (props)=>({
// tabBarIcon: ({ focused, color, size }) => {
//   console.log(focused)
// if (route.name === 'Posts') {
// return <AntDesign name="appstore-o" size={size} color={color} />;
// <AntDesign name="appstore1" size={24} color="black" />
// }

// if (route.name === 'Create posts') {
//   return <AntDesign name="plus" size={size} color={color} />;
// }

// if (route.name === 'Profile') {
//   return <Feather name="user" size={size} color={color} />;
// }
// },
// tabBarActiveTintColor: 'tomato',
// tabBarInactiveTintColor: 'gray',
// tabBarShowLabel: false,
// tabBarIconStyle: { width: 40, height: 40 },
// })

// title: "Title",
// tabBarLabel: "Label",
// tabBarShowLabel: true,
// tabBarLabelPosition: "below-icon",
// tabBarLabelStyle: { fontSize: 12 },
// tabBarIconStyle: { width: 24, height: 24 },
// tabBarBadge: 0,
// tabBarBadgeStyle: { backgroundColor: "tomato" },
// tabBarAccessibilityLabel: "Accessibility Label",
// tabBarTestID: "Test ID",
// tabBarButton: (props) => <Pressable {...props} />,
// tabBarActiveTintColor: "tomato",
// tabBarInactiveTintColor: "gray",
// tabBarActiveBackgroundColor: "white",
// tabBarInactiveBackgroundColor: "white",
// tabBarHideOnKeyboard: true,
// tabBarItemStyle: { backgroundColor: "white" },
// tabBarStyle: { backgroundColor: "white" },
// tabBarBackground: () => <></>,
// lazy: true,
// unmountOnBlur: false, // default is false !important
// freezeOnBlur: true, // default is false
// };

export const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
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
      })}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="Create posts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
