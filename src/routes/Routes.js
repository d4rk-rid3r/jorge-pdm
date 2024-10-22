import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import LogIn from '../screens/LogIn/LogIn';
import LogUp from '../screens/LogUp/LogUp';
import Main from '../screens/Main/Main';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='LogIn'
                component={LogIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='LogUp'
                component={LogUp}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}