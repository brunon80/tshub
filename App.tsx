import React from 'react'
import RootNav from './src/navigators/RootNav'
import { enableScreens } from 'react-native-screens'

enableScreens()

const App: React.FC = () => {
    return <RootNav />
}

export default App
