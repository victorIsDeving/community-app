import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const apiTesteGET = async ()=>{
  try{
  console.log('1');
  const v = await fetch('http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/users', );
  console.log('2');
  if(v.ok){
    const json = await v.json();
    
    console.log(json);
  }
  }catch(e){
    console.log(e);}
}
const apiTestePOST = async ()=>{
  try{
  console.log('1');
  const data = 
  {
    "nome": "321",
    "email": "123",
    "nusp": 13673051,
  };
  const header = {"Content-Type": "application/json"}
  const v = await fetch('http://ec2-18-230-11-198.sa-east-1.compute.amazonaws.com:8080/api/user', {method:"POST", body:JSON.stringify(data), headers: header});
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
export default function UserEvents() {
  const navigation = useNavigation();
  const [events, setEvents] = useState([
    { id: '1', title: 'Basquete da tropa', date: '2024-11-10', time: '14:00', location: 'Quadra da Escola', description: 'Partida de basquete com o pessoal.' },
    { id: '2', title: 'Futebol da turma', date: '2024-12-15', time: '16:00', location: 'Campo Municipal', description: 'Futebas dos amigos, quem quiser cola.' },
    { id: '3', title: 'Corrida na EACH', date: '2025-01-20', time: '07:30', location: 'EACH-USP', description: 'Corrida em volta da EACH-USP.' },
  ]);
  


  const handleEventPress = (event) => {
    navigation.navigate('Event Details', { event });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Eventos</Text>
      <Button title="GET" 
      onPress={apiTesteGET} ></Button>
      <Button title="POST" 
      onPress={apiTestePOST}></Button>

      {events.length > 0 ? (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.eventCard} onPress={() => handleEventPress(item)}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDate}>{`Data: ${item.date} às ${item.time}`}</Text>
            </TouchableOpacity>
          )}
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
  noEventsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});
