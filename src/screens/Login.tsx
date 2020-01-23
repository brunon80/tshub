import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TextInput, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';

import { AuthStackParamList } from '../navigators/AuthNav'
import { RootStackParamList } from '../navigators/RootNav'

type AuthScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'Login'>, 
    StackNavigationProp<RootStackParamList>
>
type AuthScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;

export interface LoginProps {
    navigation: AuthScreenNavigationProp;
    route: AuthScreenRouteProp;
}
 
const Login: React.SFC<LoginProps> = ({ navigation, route }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function signin() {
        console.log('logar')
        navigation.navigate("HomeNav")
    }

    return ( 
    <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={signin} />
        </View>
    </SafeAreaView>
     );
}
 
export default Login;