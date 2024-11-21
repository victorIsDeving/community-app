import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const criarEvento = async ()=>{
  try{
  console.log('1');
  const data = 
  {
  "id": 1,
  "nome": "string12",
  "imagem": "string23",
  "descricao": "string34",
  "localizacao": 0,
  "horaInicio": {
    "hour": 0,
    "minute": 0,
    "second": 0,
  },
  "horaFim": {
    "hour": 0,
    "minute": 0,
    "second": 0,
  },
  "data": "2024-11-21",
  "visibilidade": "string",
  "usersParticipants": [
    "string"
  ],
  "usersAdministrators": [
    "string"
  ],
  "interestsEvent": [
    {
      "interesse": "string"
    }
  ]
  };
  const header = {"Content-Type": "application/json"}
  const v = await fetch('http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/events', {method:"GET", headers: header});
  console.log('2');
  console.log(v.status);
  console.log(v.statusText);
  console.log(JSON.stringify(v.json()));
  if(v.ok){
    const json = await v.json();
    
    console.log(json);
  }
  }catch(e){
    console.log(e);}
}

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
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log(latitude, longitude);

    Alert.alert(
      'Criar Evento',
      'Deseja criar um evento neste local?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'API test',
          onPress: () => {
            
            criarEvento();
          },
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
