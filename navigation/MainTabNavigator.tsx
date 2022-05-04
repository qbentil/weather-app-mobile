import * as React from 'react';

import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { Text, View } from '../components/Themed';

import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import { Pressable } from 'react-native';
import TabTwoScreen from '../screens/TabTwoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import useColorScheme from '../hooks/useColorScheme';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}

        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'search',
          tabBarIcon: ({ color }) => <TabBarIcon name="search1" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Other"
        component={TabTwoScreen}
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => <Ionicons size={30} style={{ marginBottom: -3 }} name="md-navigate-circle-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
        
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<RootStackParamList>();
const SearchStack= createStackNavigator<RootStackParamList>();
const ProfileStack = createStackNavigator<RootStackParamList>();
const StatusStack= createStackNavigator<RootStackParamList>();
// const CallsStack = createStackNavigator<RootStackParamList>();
