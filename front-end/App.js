import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './MapScreen'; // A tela do mapa
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Exemplo de tela inicial
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Map')}>
        Map Test
      </Text>
    </View>
  );
}
