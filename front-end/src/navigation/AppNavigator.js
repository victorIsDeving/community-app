import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'; 
import UserProfile from '../screens/UserProfile';
import EventsStackNavigator from '../navigation/EventsStackNavigator'
import CustomHeader from '../screens/CustomHeader';


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
      <Drawer.Screen name="Profile" component={UserProfile} />
      <Drawer.Screen name="Events" component={EventsStackNavigator} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
