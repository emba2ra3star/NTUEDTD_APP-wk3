import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import WishListScreen from "../screens/WishListScreen"
import MyBooksScreen from "../screens/MyBooksScreen"
import AccountScreen from "../screens/AccountScreen"
import SettingScreen from "../screens/SettingScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const IconColorOn = "#6200EE";
const IconColorOff = "#666666";
const IconSize = 24;

const Navigation = () => {
    return (
        <NavigationContainer>
            <ButtomTab />
        </NavigationContainer>
    )
};

const ButtomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarInactiveTintColor: IconColorOff,
                tabBarActiveTintColor: IconColorOn,
                tabLabelStyle: { fontSize: 12, fontWeight: '500' },
                tabBarStyle: { height: 56, paddingTop: 8, paddingBottom: 8 },
            }}>
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: () => { <MaterialCommunityIcons name='home' /> }
                }}
            />
            <Tab.Screen
                name='WishList'
                component={WishListScreen}
                options={{
                    title: "WishList",
                    tabBarIcon: () => { <MaterialCommunityIcons name='bookmark' /> }
                }}
            />
            <Tab.Screen
                name='MyBooks'
                component={MyBooksScreen}
                options={{
                    title: "MyBooks",
                    tabBarIcon: () => { <MaterialCommunityIcons name='book-open' /> }
                }}
            />
        </Tab.Navigator>
    )
};

const HomeDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='HomeStack' component={HomeStack} />
            <Drawer.Screen name='Account' component={AccountScreen} />
            <Drawer.Screen name='MyBooks' component={SettingScreen} />
        </Drawer.Navigator>
    )
};

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
};

export default Navigation;