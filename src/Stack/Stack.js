import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import Signin from '../Screens/Signin'
import Login from '../Screens/Login'
import CreateAccount from '../Screens/CreateAccount'
const Stack = () => {
    const Stak = createNativeStackNavigator()
    return (
        <Stak.Navigator  screenOptions={{
            headerShown:false
        }}>
            <Stak.Screen name='Splash' component={Splash} />
            <Stak.Screen name='Signin' component={Signin} />
            <Stak.Screen name='Login' component={Login} />
            <Stak.Screen name='CreateAccount' component={CreateAccount} />

        </Stak.Navigator>
    )
}

export default Stack