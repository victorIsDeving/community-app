import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [markers, setMarkers] = useState([]); 
  const mapRef = useRef(null);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setHasPermission(true);
      getLocation(); 
    } else {
      setHasPermission(false);
    }
  };

  const listarEventos = async () => {
    try {
      console.log('CHAMANDO GET');
      const header = { "Content-Type": "application/json", "accept": "*/*" };
      const response = await fetch(
        'http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/events',
        {
          method: "GET",
          headers: header,
        }
      );
  
      if (response.ok) {
        const eventos = await response.json();
        //console.log(eventos);
  
        // Processar e adicionar eventos como marcadores
        const novosMarkers = eventos.map((evento) => {
          let latitude, longitude;
  
          // Primeiro tenta extrair do campo "endereco"
          if (evento.endereco) {
            const lista = evento.endereco.split(",");
            //console.log("Latitude (string):", lista[0]," Latitude (float):",parseFloat(lista[0]) ,"\nLongitude (string):", lista[1], " Longitude (float):", parseFloat(lista[1]));
            latitude = parseFloat(lista[0]);
            longitude = parseFloat(lista[1]);
            //console.log(latitude, longitude)
          }
          // Valida coordenadas
          if (!isNaN(latitude) && !isNaN(longitude) && latitude && longitude) {
            return {
              coordinate: { latitude, longitude },
              key: Math.random().toString(),
              id: evento.id || Math.random(),
              title: evento.nome || "Evento",
              description: evento.descricao || "",
            };
          }
        }).filter(Boolean); // Remove itens inválidos
        setMarkers(novosMarkers); // Atualiza o estado dos marcadores
        
      } else {
        console.error(`Erro ao buscar eventos: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  
  
  useEffect(() => {
    if (markers.length > 0 && mapRef.current) {
      const coordinates = markers.map(marker => marker.coordinate);
    }
  }, [markers]);


  const getLocation = async () => {
    let { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    //console.log("Minhas coordenadas: ", coords.latitude, coords.longitude);
  };

   useEffect(() => {
     listarEventos();
     requestLocationPermission(); 
   }, []);
  
   const handleMarkerPress = (evento) => {
    // Navega para a tela de detalhes do evento, passando o ID do evento
    navigation.navigate('EventDetails', { eventId: evento });
  };

   const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;  // Coleta as coordenadas do clique no mapa
    const { latitude, longitude } = coordinate;  // Desestrutura latitude e longitude
    //console.log('Coordenadas do clique:', latitude, longitude);
    
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
            // Aqui, usaremos as coordenadas do evento de clique diretamente
            // Se location estiver disponível, use-a, caso contrário, use as coordenadas do clique
            const finalLatitude =  latitude;  // Se location existe, use as coordenadas de location, senão use as coordenadas do clique
            const finalLongitude = longitude;  // Mesma lógica para longitude
            
            // Agora as coordenadas finais (finalLatitude, finalLongitude) serão passadas para a navegação
            navigation.navigate('CreateEvent', {
              latitude: finalLatitude,
              longitude: finalLongitude,
            });
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
  ref={mapRef}
  style={styles.map}
  initialRegion={{
    latitude: location ? markers[15].coordinate.latitude : -23.482999, // Usa a posição do usuário, se disponível
    longitude: location ? markers[15].coordinate.longitude : -46.500924,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }}
  onPress={handleMapPress}
  customMapStyle={mapStyles}
>
  {/* Marcador do usuário */}
  <Marker coordinate={location} 
    title="Você" 
    pinColor="grey"
    />

  {/* Marcadores dos eventos */}
  {markers.length > 0 ? (
    //console.log(markers),
    markers.map((marker) => (
      <Marker
        key={marker.key}
        coordinate={marker.coordinate}
        title={marker.title}
        description={marker.description}
        pinColor="blue"
        onPress={() => handleMarkerPress(marker.id)}
      />
    ))
  ) : (
    <Text style={{ position: 'absolute', top: 10, left: 10 }}>Nenhum evento encontrado.</Text>
  )}
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

// Estilo do mapa com predominância de azul
const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ccd9eb" // Cor azul clara para o fundo
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff" // Cor branca para os textos
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#0000" // Cor branca para os textos de contorno
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff" // Azul suave para áreas administrativas
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ccd9eb" // Azul claro para áreas de interesse
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff" // Azul suave para as estradas
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#93c8e3" // Azul mais forte para corpos d'água
      }
    ]
  }
];

export default MapScreen;
