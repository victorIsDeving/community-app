import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  // Função para obter a permissão de localização
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
      getLocation(); // Obter a localização do usuário
    } else {
      setHasPermission(false);
    }
  };

  const getLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
  };

  useEffect(() => {
    requestLocationPermission(); // Solicitar permissão de localização quando o componente for montado
  }, []);

  return (
    <View style={styles.container}>
      {hasPermission ? (
        location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
