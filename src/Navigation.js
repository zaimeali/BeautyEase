import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Screens
import HomeScreen from './screen/HomeScreen';
import ServicesScreen from './screen/ServicesScreen';
import BookAppointment from './screen/BookAppointment';
import ChooseDate from './screen/ChooseDate';
import BookNow from './screen/BookNow';
import Queue from './screen/WaitingScreen';

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
                <Drawer.Screen 
                    name="Choose Date" 
                    component={ ChooseDate }
                />
                <Drawer.Screen 
                name="Book Now" 
                component={ BookNow }
            />
            <Drawer.Screen 
            name="Queue" 
            component={ Queue }
        />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
