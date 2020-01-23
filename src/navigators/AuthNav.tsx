import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'

export type AuthStackParamList = {
    Login: undefined;
  };

const Stack = createStackNavigator<AuthStackParamList>();

function AuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNav