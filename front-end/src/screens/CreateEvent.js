import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Menu, TextInput as PaperInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = ({ location, onCreateEvent, route, navigation }) => {
  // Acessando latitude e longitude do route.params
  const { latitude, longitude } = route.params || {};
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [eventLocation, setEventLocation] = [
    latitude,
    longitude,
  ];
  const [latitudeState, setLatitude] = useState(latitude);
  const [longitudeState, setLongitude] = useState(longitude);

  const [categoryVisible, setCategoryVisible] = useState(false);
  const [groupVisible, setGroupVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);


  const goToMap = () => {
    navigation.navigate('MapScreen');
  }

  // Atualizar a localização com as coordenadas recebidas
  const handleLocationPress = () => {
    if (!latitude || !longitude) {
      Alert.alert("Erro", "Por favor, selecione uma localização no mapa.");
      return;
    }
    setEventLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const handleCreateEvent = () => {
    if (!latitude || !longitude) {
      Alert.alert("Erro", "Por favor, selecione uma localização no mapa.");
      return;
    }

    console.log("Evento criado:", {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      startTime,
      endTime,
      location: { latitude, longitude },  // Passando as coordenadas para o evento
      category: selectedCategory,
      group: selectedGroup,
    });

    // Enviar evento com localização para o backend
    onCreateEvent({
      name: eventName,
      description: eventDescription,
      date: eventDate,
      startTime,
      endTime,
      latitude,
      longitude,  // Enviando as coordenadas
      category: selectedCategory,
      group: selectedGroup,
    });

    // Limpar campos após criação
    setEventName('');
    setEventDescription('');
    setEventDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setEventLocation('');  // Resetando a localização
    setSelectedCategory('');
    setSelectedGroup('');
  };

  const handleStartTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startTime;
    setShowStartTimePicker(false);
    setStartTime(currentDate);
  };

  const handleEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || endTime;
    setShowEndTimePicker(false);
    setEndTime(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Novo Evento</Text>

      <PaperInput
        label="Nome do Evento"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />

      <PaperInput
        label="Descrição do Evento"
        value={eventDescription}
        onChangeText={setEventDescription}
        style={styles.descriptionInput}
        multiline
      />

      <Button
        mode="outlined"
        onPress={() => setShowDatePicker(true)}
        style={styles.input}
      >
        {eventDate.toLocaleDateString()}
      </Button>

      <View style={styles.row}>
        <Button
          mode="outlined"
          onPress={() => setShowStartTimePicker(true)}
          style={styles.timeInput}>
          {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Button>
        <Button
          mode="outlined"
          onPress={() => setShowEndTimePicker(true)}
          style={styles.timeInput}>
          {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Button>
      </View>

      <Button
        mode="outlined"
        onPress={goToMap}
        style={styles.input}
      >
       {eventLocation ? `${latitudeState}, ${longitudeState}` : "Selecionar Localização no Mapa"}
      </Button>

      <View style={styles.row}>
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

      <Button mode="contained" onPress={handleCreateEvent} style={styles.createButton}>
        Criar Evento
      </Button>

      {showStartTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleStartTimeChange}
        />
      )}
      {showEndTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endTime}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={handleEndTimeChange}
        />
      )}
      
      {showDatePicker && (
        <DateTimePicker
          value={eventDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            setEventDate(selectedDate || eventDate);
          }}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f7f9fc",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    marginBottom: 12,
  },
  descriptionInput: {
    height: 150,  // Aumentando a altura para o campo de descrição
    marginBottom: 12,
  },
  createButton: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeInput: {
    width: '45%',
  },
  dropdown: {
    width: '45%',
  },
  locationCoordinates: {
    position: 'absolute',
    top: 160,  // Ajuste a posição conforme necessário
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 8,
    borderRadius: 5,
  },
});

export default CreateEvent;
