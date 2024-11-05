import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserEvents from './UserEvents';
import EventDetails from './EventDetails';

const Stack = createStackNavigator();

export default function UserEventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserEvents"
        component={UserEvents}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetails}
        options={{ title: 'Detalhes do Evento' }}
      />
    </Stack.Navigator>
  );
}
