import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Soldiers from './components/Soldiers';
import Detail from './components/Detail';



export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>       
        <Stack.Screen name="Home" component={Soldiers} options={{ title: 'Soldiers' }} />
        <Stack.Screen name="Detail" component={Detail} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

