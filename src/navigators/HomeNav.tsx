import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/ExHome'

export type HomeStackParamList = {
    Home: undefined
}

const Stack = createStackNavigator<HomeStackParamList>()

const HomeNav: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeNav
