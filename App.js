import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Soldiers from './screens/Soldiers';
import Soldier from './screens/Soldier';



export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">       
        <Stack.Screen name="Home" component={Soldiers} options={{ title: 'Soldiers' }} />
        <Stack.Screen name="Soldier" component={Soldier} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

