import React, { useState, useEffect, ReactElement } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
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

interface Repository {
    id: number
    name: string
    full_name: string
    description: string
}

const Home: React.SFC<HomeProps> = observer(({ navigation, route }: HomeProps) => {
    const [reps, setReps] = useState<[Repository]>()

    navigation.setOptions({
        headerLeft: function right() {
            return (
                <TouchableOpacity onPress={(): void => navigation.goBack()}>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text>{'Voltar'}</Text>
                    </View>
                </TouchableOpacity>
            )
        },
    })

    const { baseStore } = useStores()
    console.log(baseStore.username)

    async function fetchReps(): Promise<void> {
        const response = await baseStore.get<[Repository]>(`https://api.github.com/users/${baseStore.username}/repos`)
        setReps(response)
    }

    useEffect(() => {
        fetchReps()
    }, [])

    function _renderItem({ item }: { item: Repository }): ReactElement {
        return (
            <View
                style={{
                    borderBottomColor: 'lightgray',
                    borderBottomWidth: 1,
                    padding: 10,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nome: {item.name}</Text>
                <Text>Nome Completo: {item.full_name}</Text>
                <Text>Descrição: {item.description}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 20 }}>Repositorios de {baseStore.username}</Text>
            </View>
            <FlatList data={reps} renderItem={_renderItem} keyExtractor={(item): string => item.id.toString()} />
        </SafeAreaView>
    )
})

export default Home
