import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from "../screens/AccountScreen"
import SettingsScreen from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

const MenuDrawer=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Account' component={AccountScreen} />
                <Drawer.Screen name='Setting' component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};