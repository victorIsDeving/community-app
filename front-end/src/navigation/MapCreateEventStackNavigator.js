import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen'; // Caminho correto para MapScreen
import CreateEvent from '../screens/CreateEvent'; // Caminho correto para CreateEvent

const Stack = createStackNavigator();

export default function MapCreateEventStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
