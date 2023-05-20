import { TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { PostsScreen } from '../PostsScreen';
import { CreatePostsScreen } from '../CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen';

import { styles } from './Home.styles';

const Tabs = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  headerTintColor: styles.header.color,
  headerTitleAlign: styles.headerTitle.alignItems,
  headerTitleStyle: styles.headerTitle,
  headerTitleContainerStyle: styles.headerContainerItem,
  headerRightContainerStyle: styles.headerContainerItem,
  headerLeftContainerStyle: styles.headerContainerItem,
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
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
  tabBarItemStyle: styles.tabBarItem,
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
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color={styles.header.color}
              onPress={navigation.goBack}
            />
          ),
          tabBarStyle: { display: 'none' },
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
