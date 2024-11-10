import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventDetails({ route }) {
  const navigation = useNavigation();
  const { event } = route.params;
  const [isParticipating, setIsParticipating] = useState(false);

  const handleParticipation = () => {
    setIsParticipating(!isParticipating);
    Alert.alert(
      isParticipating ? 'Você cancelou a participação.' : 'Você confirmou a participação!'
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Evento: ${event.title}\nData: ${event.date}\nDescrição: ${event.description}`,
      });
    } catch (error) {
      alert('Erro ao compartilhar o evento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{event.title}</Text>
      <Text style={styles.date}>{`Data: ${event.date}`}</Text>
      <Text style={styles.description}>{event.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleParticipation}>
        <Text style={styles.buttonText}>
          {isParticipating ? 'Cancelar Participação' : 'Confirmar Participação'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Compartilhar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('User Events')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f7f9fc',
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
  location: {
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
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
