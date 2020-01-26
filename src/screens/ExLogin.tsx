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
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ padding: 20 }}>
                <TextInput
                    style={{
                        marginVertical: 10,
                        paddingBottom: 8,
                        fontSize: 18,
                    }}
                    underlineColorAndroid="gray"
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Button disabled={!username} title="Ver Repositorios" onPress={signin} />
            </View>
        </SafeAreaView>
    )
})

export default Login
