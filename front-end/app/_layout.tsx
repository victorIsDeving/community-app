import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, Text, View, StyleSheet } from 'react-native';
import Home from './Home';
import UserProfile from './UserProfile';
import UserEventsStack from './UserEventsStack';

const Drawer = createDrawerNavigator();

function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Community</Text>
    </View>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <CustomHeader />,
        headerTitleAlign: 'center',
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ title: 'Tela Inicial' }} />
      <Drawer.Screen name="UserProfile" component={UserProfile} options={{ title: 'Meu Perfil' }} />
      <Drawer.Screen name="UserEventsStack" component={UserEventsStack} options={{ title: 'Meus Eventos' }} />
    </Drawer.Navigator>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
