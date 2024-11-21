import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../screens/MapScreen'; 
import CreateEvent from '../screens/CreateEvent';
import CreateUser from '../screens/CreateUser';
import EventsStackNavigator from '../navigation/EventsStackNavigator';
import CustomHeader from '../screens/CustomHeader';
import ProfileStackNavigator from './ProfileStackNavigator';
import MapCreateEventStackNavigator from './MapCreateEventStackNavigator';  // A importação continua a mesma

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
      {/* Correção aqui: o MapCreateEventStackNavigator deve ser passado como componente de uma tela */}
      <Drawer.Screen name="Community" component={MapCreateEventStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
      <Drawer.Screen name="Events" component={EventsStackNavigator} />
      <Drawer.Screen name="Registrar-se" component={CreateUser} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
