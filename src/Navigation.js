import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Component
import HomeScreen from './screen/HomeScreen';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={ HomeScreen } 
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
