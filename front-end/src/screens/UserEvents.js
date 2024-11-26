import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const apiTesteGET = async () => {
  try {
    console.log('1');
    const v = await fetch('http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/events');
    console.log('2');
    if (v.ok) {
      const json = await v.json();
      console.log(json);
      return json; // Retorna os eventos recebidos
    } else {
      console.error('Erro na requisição', v.status);
      return [];
    }
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default function UserEvents() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]); // Inicialmente vazio
  const [isLoading, setIsLoading] = useState(true); // Para mostrar um carregamento enquanto espera pela resposta da API
  const [error, setError] = useState(null); // Para armazenar erros, se houver

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      const fetchedEvents = await apiTesteGET();
      if (fetchedEvents.length === 0) {
        setError('Nenhum evento encontrado.');
      }
      setEvents(fetchedEvents);
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    navigation.navigate('Event Details', { eventId: event });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Eventos</Text>
      {isLoading ? (
        <Text style={styles.loadingText}>Carregando eventos...</Text>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : events.length > 0 ? (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const eventDate = item.data || "Data não disponível"; // Garantir que a data não seja undefined
            const eventStartTime = item.horaInicio || "Horário de início não disponível"; // Garantir que o horário de início não seja undefined
            const eventEndTime = item.horaFim || "Horário de término não disponível"; // Garantir que o horário de término não seja undefined
            
            return (
              <TouchableOpacity style={styles.eventCard} onPress={() => handleEventClick(item.id.toString())}>
                <Text style={styles.eventTitle}>{item.nome}</Text>
                <Text style={styles.eventDate}>{`Data: ${eventDate} de ${eventStartTime} às ${eventEndTime}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.noEventsText}>Você ainda não criou eventos.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#e6f0ff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#ff0000',
    textAlign: 'center',
    marginTop: 20,
  },
  noEventsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
