// CreateEvent.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleCreateEvent = () => {
    console.log("Evento criado:", {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      description: eventDescription,
    });
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setEventDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Evento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do evento"
        value={eventName}
        onChangeText={setEventName}
      />

      <Text style={styles.label}>Data do Evento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a data (ex: 2024-12-31)"
        value={eventDate}
        onChangeText={setEventDate}
      />

      <Text style={styles.label}>Local do Evento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o local do evento"
        value={eventLocation}
        onChangeText={setEventLocation}
      />

      <Text style={styles.label}>Descrição do Evento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite uma breve descrição"
        value={eventDescription}
        onChangeText={setEventDescription}
        multiline
      />

      <Button title="Criar Evento" onPress={handleCreateEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default CreateEvent;
