import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();
  
  // Dados fictícios de exemplo
  const [user, setUser] = useState({
    name: 'Alex Zhu',
    email: 'alex@exemplo.com',
    phone: '(11) 98765-4321',
    description: 'Sou um estudante de graduação apaixonado por tecnologia...',
    interests: ['Basquete', 'Futebol', 'Tecnologia'],
  });

  const [newInterest, setNewInterest] = useState('');

  const handleSaveProfile = () => {
    // Aqui você enviaria os dados atualizados para o backend
    navigation.goBack();
  };

  const addInterest = () => {
    if (newInterest.trim()) {
      setUser({ ...user, interests: [...user.interests, newInterest] });
      setNewInterest('');
    }
  };

  const removeInterest = (index) => {
    setUser({
      ...user,
      interests: user.interests.filter((_, i) => i !== index),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Perfil</Text>
      <TextInput
        style={styles.input}
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={user.phone}
        onChangeText={(text) => setUser({ ...user, phone: text })}
        placeholder="Telefone"
      />
      <TextInput
        style={styles.input}
        value={user.description}
        onChangeText={(text) => setUser({ ...user, description: text })}
        placeholder="Descrição"
        multiline
      />

      <Text style={styles.subheader}>Interesses</Text>
      <FlatList
        data={user.interests}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.interestItem}>
            <Text style={styles.interestText}>{item}</Text>
            <TouchableOpacity onPress={() => removeInterest(index)}>
              <Text style={styles.removeButton}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      
      <TextInput
        style={styles.input}
        value={newInterest}
        onChangeText={setNewInterest}
        placeholder="Adicionar novo interesse"
      />
      <TouchableOpacity style={styles.addButton} onPress={addInterest}>
        <Text style={styles.addButtonText}>Adicionar Interesse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
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
  },
  subheader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 2,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  interestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  interestText: {
    fontSize: 16,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: -5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
