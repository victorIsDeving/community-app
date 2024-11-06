import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'; 

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MapScreen">
      <Drawer.Screen name="Community" component={MapScreen} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
