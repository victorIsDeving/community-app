import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen'; // Caminho correto para MapScreen
import CreateEvent from '../screens/CreateEvent'; // Caminho correto para CreateEvent
import EventDetails from '../screens/EventDetails';
import UserEvents from '../screens/UserEvents';

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
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserEvents"
        component={UserEvents}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
