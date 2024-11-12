// CreateEvent.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button, IconButton, Menu, Divider, TextInput as PaperInput } from 'react-native-paper';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [groupVisible, setGroupVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleCreateEvent = () => {
    console.log("Evento criado:", {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      startTime,
      endTime,
      location: eventLocation,
      category: selectedCategory,
      group: selectedGroup,
    });
    // Limpar campos
    setEventName('');
    setEventDescription('');
    setEventDate('');
    setStartTime('');
    setEndTime('');
    setEventLocation('');
    setSelectedCategory('');
    setSelectedGroup('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Novo Evento</Text>

      {/* Nome do Evento */}
      <PaperInput
        label="Nome do Evento"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
        mode="outlined"
      />

      {/* Descrição */}
      <PaperInput
        label="Descrição do Evento"
        value={eventDescription}
        onChangeText={setEventDescription}
        style={styles.input}
        mode="outlined"
        multiline
      />

      {/* Data */}
      <PaperInput
        label="Data"
        value={eventDate}
        onChangeText={setEventDate}
        style={styles.input}
        mode="outlined"
        right={<PaperInput.Icon name="calendar" />}
      />

      {/* Horários */}
      <View style={styles.row}>
        <PaperInput
          label="Horário de Início"
          value={startTime}
          onChangeText={setStartTime}
          style={[styles.input, styles.timeInput]}
          mode="outlined"
          right={<PaperInput.Icon name="clock" />}
        />
        <PaperInput
          label="Horário de Término"
          value={endTime}
          onChangeText={setEndTime}
          style={[styles.input, styles.timeInput]}
          mode="outlined"
          right={<PaperInput.Icon name="clock" />}
        />
      </View>

      {/* Local */}
      <PaperInput
        label="Endereço"
        value={eventLocation}
        onChangeText={setEventLocation}
        style={styles.input}
        mode="outlined"
      />

      {/* Categoria e Grupos */}
      <View style={styles.row}>
        {/* Categoria Dropdown */}
        <Menu
          visible={categoryVisible}
          onDismiss={() => setCategoryVisible(false)}
          anchor={
            <Button
              mode="outlined"
              onPress={() => setCategoryVisible(true)}
              style={styles.dropdown}>
              {selectedCategory || "Categoria"}
            </Button>
          }>
          <Menu.Item onPress={() => setSelectedCategory('Basquete')} title="Basquete" />
          <Menu.Item onPress={() => setSelectedCategory('Tênis')} title="Tênis" />
          <Menu.Item onPress={() => setSelectedCategory('Dança')} title="Dança" />
          <Menu.Item onPress={() => setSelectedCategory('RPG de Mesa')} title="RPG de Mesa" />
        </Menu>

        {/* Grupo Dropdown */}
        <Menu
          visible={groupVisible}
          onDismiss={() => setGroupVisible(false)}
          anchor={
            <Button
              mode="outlined"
              onPress={() => setGroupVisible(true)}
              style={styles.dropdown}>
              {selectedGroup || "Grupo"}
            </Button>
          }>
          <Menu.Item onPress={() => setSelectedGroup('Grupo 1')} title="Grupo 1" />
          <Menu.Item onPress={() => setSelectedGroup('Grupo 2')} title="Grupo 2" />
          <Menu.Item onPress={() => setSelectedGroup('Grupo 3')} title="Grupo 3" />
          <Menu.Item onPress={() => setSelectedGroup('Grupo 4')} title="Grupo 4" />
        </Menu>
      </View>

      {/* Botão Criar */}
      <Button mode="contained" onPress={handleCreateEvent} style={styles.createButton}>
        Criar Evento
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 5,
  },
  createButton: {
    marginTop: 20,
    padding: 10,
  },
});

export default CreateEvent;
