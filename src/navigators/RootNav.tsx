import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationNativeContainer } from '@react-navigation/native'

import AuthNav from './AuthNav'
import HomeNav from './HomeNav'

export type RootStackParamList = {
    AuthNav: undefined
    HomeNav: undefined | object
}

const Stack = createStackNavigator<RootStackParamList>()

const RootNav: React.FC = () => {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="AuthNav" component={AuthNav} />
                <Stack.Screen name="HomeNav" component={HomeNav} />
            </Stack.Navigator>
        </NavigationNativeContainer>
    )
}

export default RootNav
