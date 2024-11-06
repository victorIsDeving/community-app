import React, { useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const App = () => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  // Função para obter a permissão de localização
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
      getLocation();  // Se a permissão for concedida, obtemos a localização
    } else {
      setHasPermission(false);
    }
  };

  // Função para obter a localização atual
  const getLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {hasPermission ? (
        location ? (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={location} title="Você está aqui!" />
          </MapView>
        ) : (
          <Text>Carregando localização...</Text>
        )
      ) : (
        <Text>Permissão de localização negada. Não podemos acessar a sua localização.</Text>
      )}
    </View>
  );
};

export default App;
