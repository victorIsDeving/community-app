import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button, Menu, TextInput as PaperInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import EventDetails from './EventDetails';

const CreateEvent = ({ location, onCreateEvent, route, navigation }) => {
  const { latitude, longitude } = route.params || {};
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [eventLocation, setEventLocation] = [latitude, longitude];
  const [latitudeState, setLatitude] = useState(latitude);
  const [longitudeState, setLongitude] = useState(longitude);

  const [categoryVisible, setCategoryVisible] = useState(false);
  const [groupVisible, setGroupVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const [eventImage, setEventImage] = useState('');

  const goToMap = () => {
    navigation.navigate('MapScreen');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Atualize o estado com o URI da imagem
      console.log('Imagem selecionada:', result.assets[0].uri);
    } else {
      Alert.alert('Erro', 'Nenhuma imagem foi selecionada.');
    }
  };
  
  const criarEvento = async () => {
    try {
      console.log('1INFORMACOES E TALS \ne\ne\ne\ne\ne\nEEEEEE');
      
      console.log(String(startTime));
      console.log(String(endTime));
      const data = {
        "data": "2024-11-26",
        "descricao": eventDescription,
        "endereco": ""+latitude+","+longitude,
        "horaFim": String(endTime).split(" ")[4],
        "horaInicio": String(startTime).split(" ")[4],
        "imagem": "",
        "latitude": -23.0,
        "longitude": -46.0,
        "nome": eventName,
        "visibilidade": "string"
      };
      const header = { "Content-Type": "application/json", "accept": "*/*"};
      const v = await fetch('http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/event', { method: "POST", headers: header, body: JSON.stringify(data)});
      console.log('2');
      console.log(v.status);
      console.log(v.statusText);
      if (v.ok) {
        const json = await v.json();
        //console.log(json);
        navigation.navigate('EventDetails', { eventId: json.id });
      }
    } catch (e) {
      console.log(e);
    }
  };


  const handleCreateEvent = () => {
    if (!latitude || !longitude) {
      Alert.alert('Erro', 'Por favor, selecione uma localização no mapa.');
      return;
    }

    console.log('Evento criado:', {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      startTime,
      endTime,
      location: { latitude, longitude },
      category: selectedCategory,
      group: selectedGroup,
      image: eventImage,
    });

    onCreateEvent({
      name: eventName,
      description: eventDescription,
      date: eventDate,
      startTime,
      endTime,
      latitude,
      longitude,
      category: selectedCategory,
      group: selectedGroup,
      image: eventImage,
    });

    setEventName('');
    setEventDescription('');
    setEventDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setEventLocation('');
    setSelectedCategory('');
    setSelectedGroup('');
    setEventImage('');
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
      {/* Botão circular para selecionar a imagem */}
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Adicionar Imagem</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.contentContainer}>Criar Novo Evento</Text>

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
        labelStyle={styles.ButtonText}>
        {eventDate.toLocaleDateString()}
      </Button>

      <View style={styles.row}>
        <Button
          mode="outlined"
          onPress={() => setShowStartTimePicker(true)}
          style={styles.timeInput}
          labelStyle={styles.ButtonText}>
          {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Button>
        <Button
          mode="outlined"
          onPress={() => setShowEndTimePicker(true)}
          style={styles.timeInput}
          labelStyle={styles.ButtonText}>
          {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Button>
      </View>

      <Button
        mode="outlined"
        onPress={goToMap}
        style={styles.input}
        labelStyle={styles.ButtonText}>
        Localização
      </Button>

      <Button mode="contained" onPress={criarEvento} style={styles.createButton}>
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
    backgroundColor: '#f7f9fc', // Fundo claro
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff', // Fundo branco para contraste
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000', // Texto preto
    borderWidth: 1,
    borderColor: '#90CAF9',
    marginBottom: 15,
  },
  descriptionInput: {
    backgroundColor: '#ffffff', // Fundo branco para contraste
    height: 100, // Altura maior para texto longo
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000', // Texto preto
    borderWidth: 1,
    borderColor: '#90CAF9',
    marginBottom: 15,
    textAlignVertical: 'top', // Alinha o texto ao topo
  },
  ButtonText: {
    fontSize: 16,
    color: '#000', // Texto preto para contraste
  },
  imagePicker: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagePlaceholder: {
    textAlign: 'center',
    color: '#757575', // Cinza escuro
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  timeInput: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#90CAF9',
    height: 50,
    justifyContent: 'center',
  },
  dropdown: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#90CAF9',
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  createButton: {
    backgroundColor: '#2196F3', // Azul forte
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff', // Texto branco para contraste
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default CreateEvent;
