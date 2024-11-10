import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function UserProfile() {
  const navigation = useNavigation();

  const user = {
    name: 'Alex Zhu',
    email: 'alex@exemplo.com',
    phone: '(11) 98765-4321',
    profilePicture: 'https://via.placeholder.com/100',
    description:
      'Sou um estudante de graduação apaixonado por tecnologia e desenvolvimento de software.',
    interests: ['Basquete', 'Futebol', 'Tecnologia', 'Música', 'Caminhadas'],
  };

  const handleEditProfilePicture = () => {
    // Lógica para editar a foto do perfil
    console.log('Editar foto do perfil');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Usuário</Text>

      <View style={styles.profileImageContainer}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfilePicture}>
          <Icon name="camera-alt" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.label}>E-mail: {user.email}</Text>
      <Text style={styles.label}>Telefone: {user.phone}</Text>
      <Text style={styles.description}>{user.description}</Text>
      <Text style={styles.interestsTitle}>Interesses:</Text>
      <View style={styles.interestsContainer}>
        {user.interests.map((interest, index) => (
          <View key={index} style={styles.interestTag}>
            <Text style={styles.interestText}>{interest}</Text>
          </View>
        ))}
      </View>

      {/* Botão para editar o perfil */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile', { user })}
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Community')}
      >
        <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#007BFF',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007BFF',
    borderRadius: 15,
    padding: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  interestsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10,
    color: '#333',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  interestTag: {
    backgroundColor: '#007BFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  interestText: {
    color: '#fff',
    fontSize: 16,
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
