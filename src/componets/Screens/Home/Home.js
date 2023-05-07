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
  headerTitleContainerStyle: styles.headerContainer,
  headerRightContainerStyle: styles.headerContainer,
  headerLeftContainerStyle: styles.headerContainer,
  tabBarIcon: ({ focused, color, size }) => {
    let tabBarItem;

    if (route.name === 'Post') {
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
  tabBarItemStyle: styles.tabBarItem,
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
              color={styles.headerExitBtn.color}
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
