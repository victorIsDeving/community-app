import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserEvents from '../screens/UserEvents';
import EventDetails from '../screens/EventDetails';

const Stack = createStackNavigator();

// Stack Navigator para UserEvents e EventDetails
function EventsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Events" component={UserEvents} options={{ headerShown: false }} />
      <Stack.Screen name="Event Details" component={EventDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default EventsStackNavigator;