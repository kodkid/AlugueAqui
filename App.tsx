import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './src/screens/Login'
import Recovery from './src/screens/Recovery'
import Register from './src/screens/Register'
import Home from './src/screens/Home'

import CardRegister from './src/screens/CardRegister'



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ title: 'Login' }}

        />
        <Stack.Screen
          name="Recovery"
          component={Recovery}
          options={{ title: 'Recovery' }}

        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}

        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}

        />

         <Stack.Screen
          name="CardRegister"
          component={CardRegister}
          options={{ title: 'CardRegister' }}

        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
