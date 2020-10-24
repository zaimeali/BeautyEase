import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Screens
import HomeScreen from './screen/HomeScreen';
import ServicesScreen from './screen/ServicesScreen';
import BookAppointment from './screen/BookAppointment';

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
                <Drawer.Screen 
                name="Book Appointment" 
                component={ BookAppointment }
            />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
