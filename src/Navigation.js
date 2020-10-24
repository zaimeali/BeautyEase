import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Screens
import HomeScreen from './screen/HomeScreen';
import ServicesScreen from './screen/ServicesScreen';

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen 
                    name="Home" 
                    component={ HomeScreen }
                />
                <Drawer.Screen 
                    name="Service" 
                    component={ ServicesScreen }
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
