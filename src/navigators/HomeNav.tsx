import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'

type HomeStackParamList = {
    Home: { user: string } | undefined;
  };

const Stack = createStackNavigator<HomeStackParamList>();

function HomeNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        initialParams={{ user: 'brunon80' }}
      />
    </Stack.Navigator>
  );
}

export default HomeNav