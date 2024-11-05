import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  UserProfile: undefined;
  UserEvents: undefined;
  EventDetails: { title: string; date: string; location: string; description: string };
};

type UserEventsScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'UserEvents'>;

const UserEvents = () => {
  const navigation = useNavigation<UserEventsScreenNavigationProp>();

  const userEvents = [
    { id: '1', title: 'Jogo de Basquete', date: '10/11/2024', location: 'Quadra Central', description: 'Partida amistosa de basquete entre amigos.' },
    { id: '2', title: 'Workshop de Programação', date: '15/11/2024', location: 'Sala 101', description: 'Workshop de introdução ao desenvolvimento de software.' },
    { id: '3', title: 'Encontro de Música', date: '20/11/2024', location: 'Parque Central', description: 'Encontro para troca de conhecimentos musicais.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Eventos</Text>
      <FlatList
        data={userEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.eventCard}
            onPress={() =>
              navigation.navigate('EventDetails', {
                title: item.title,
                date: item.date,
                location: item.location,
                description: item.description,
              })
            }
          >
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDetails}>Data: {item.date}</Text>
            <Text style={styles.eventDetails}>Local: {item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
  
};

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
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDetails: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

export default UserEvents;
