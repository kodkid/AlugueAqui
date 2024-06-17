import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Login from './src/screens/Login'
import Recovery from './src/screens/Recovery'
import Register from './src/screens/Register'
import Home from './src/screens/Home'


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}

        />
        <Stack.Screen
          name="Recovery"
          component={Recovery}
          options={{ title: 'Home' }}

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
      </Stack.Navigator>
    </NavigationContainer>

  );
}
