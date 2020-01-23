import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'

export interface HomeProps {
    
}
 
const Home: React.SFC<HomeProps> = () => {
    return ( 
    <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
        <View>
            <Text>Home</Text>
        </View>
    </SafeAreaView>
     );
}
 
export default Home;