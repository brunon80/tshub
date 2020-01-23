import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native'
import { observer } from 'mobx-react'

import { AuthStackParamList } from '../navigators/AuthNav'
import { RootStackParamList } from '../navigators/RootNav'

import { useStores } from '../hooks/useStores'

type AuthScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Login'>,
    StackNavigationProp<RootStackParamList>
>
type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>

export interface LoginProps {
    navigation: AuthScreenNavigationProp
    route: AuthScreenRouteProp
}

const Login: React.SFC<LoginProps> = observer(({ navigation }: LoginProps) => {
    const [username, setUsername] = useState('')

    const { baseStore } = useStores()

    function signin(): void {
        console.log('logar')
        baseStore.username = username
        navigation.navigate('HomeNav')
    }

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <View style={{ padding: 20 }}>
                <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
                <Button disabled={!username} title="Sign in" onPress={signin} />
            </View>
        </SafeAreaView>
    )
})

export default Login
