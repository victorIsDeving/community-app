import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [markers, setMarkers] = useState([]); 

  
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
      getLocation(); 
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
    requestLocationPermission(); 
  }, []);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;

    Alert.alert(
      'Criar Evento',
      'Deseja criar um evento neste local?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            
            setMarkers((prevMarkers) => [
              ...prevMarkers,
              { coordinate, key: Math.random().toString() },
            ]);
          },
        },
      ]
    );
  };

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
            onPress={handleMapPress} 
          >
            {/* Marcador do usuário */}
            <Marker coordinate={location} title="Você está aqui!" />

            {/* Marcadores criados */}
            {markers.map((marker) => (
              <Marker
                key={marker.key}
                coordinate={marker.coordinate}
                title="Evento"
              />
            ))}
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
