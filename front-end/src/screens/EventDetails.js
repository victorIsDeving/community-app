import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EventDetails({ route }) {
    const navigation = useNavigation();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{event.title}</Text>
      <Text style={styles.date}>{`Data: ${event.date}`}</Text>
      <Text style={styles.description}>{event.description}</Text>

      {/* Botão para voltar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User Events')}>
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
    textAlign: 'center'
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
    marginTop: 400,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
