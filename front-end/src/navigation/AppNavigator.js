import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'; 
import CreateEvent from '../screens/CreateEvent';
import EventsStackNavigator from '../navigation/EventsStackNavigator'
import CustomHeader from '../screens/CustomHeader';
import ProfileStackNavigator from './ProfileStackNavigator';


const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Community"
      screenOptions={{
        headerTitle: () => <CustomHeader />,
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="Community" component={MapScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
      <Drawer.Screen name="Criar Evento" component={CreateEvent} />
      <Drawer.Screen name="Events" component={EventsStackNavigator} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
