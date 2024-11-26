import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

export default function EventDetails({ route }) {
  const navigation = useNavigation();
  const { eventId } = route.params;
  const [event, setEvent] = useState(null);
  const [isParticipating, setIsParticipating] = useState(false);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/events/${eventId}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os detalhes do evento.');
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <Text>Carregando...</Text>;
  }

  const coordinates = event.endereco ? event.endereco.split(',').map(coord => parseFloat(coord)) : [0, 0];

  const handleParticipation = () => {
    setIsParticipating(!isParticipating);
    Alert.alert(
      isParticipating ? 'Você cancelou a participação.' : 'Você confirmou a participação!'
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Evento: ${event.nome}\nData: ${event.data}\nDescrição: ${event.descricao}`,
      });
    } catch (error) {
      alert('Erro ao compartilhar o evento');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{event.nome}</Text>
      <Text style={styles.date}>{`Data: ${event.data}`}</Text>
      <Text style={styles.description}>{event.descricao}</Text>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyles}
          initialRegion={{
            latitude: coordinates[0],
            longitude: coordinates[1],
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
        >
          <Marker coordinate={{ latitude: coordinates[0], longitude: coordinates[1] }} title={event.nome} />
        </MapView>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleParticipation}>
        <Text style={styles.buttonText}>
          {isParticipating ? 'Cancelar Participação' : 'Confirmar Participação'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Compartilhar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserEvents')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  date: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    height: 250,
    marginVertical: 20,
  },
  map: {
    flex: 1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ccd9eb"
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
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#0000"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ccd9eb"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#93c8e3"
      }
    ]
  }
];
