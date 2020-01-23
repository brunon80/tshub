import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { observer } from 'mobx-react'

import { HomeStackParamList } from '../navigators/HomeNav'
import { useStores } from '../hooks/useStores'

type AuthScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>

type AuthScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>

export interface HomeProps {
    navigation: AuthScreenNavigationProp
    route: AuthScreenRouteProp
}

const Home: React.SFC<HomeProps> = ({ navigation, route }: HomeProps) => {
    const { baseStore } = useStores()
    console.log(baseStore.username)

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home
