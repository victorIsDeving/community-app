import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  UserProfile: undefined;
};

type UserProfileScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'UserProfile'>;

export default function UserProfile() {
  const navigation = useNavigation<UserProfileScreenNavigationProp>();

  // Exemplo de interesses do usuário
  const interests = ['Basquete', 'Futebol', 'Tecnologia', 'Música', 'Caminhadas'];

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.header}>Perfil do Usuário</Text>
      
      {/* Imagem de perfil */}
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }} // Substitua pela URL da imagem do usuário
        style={styles.profileImage}
      />
      
      {/* Nome do usuário */}
      <Text style={styles.title}>Alex Zhu</Text>
      
      {/* E-mail */}
      <Text style={styles.label}>E-mail: alex@exemplo.com</Text>
      
      {/* Telefone */}
      <Text style={styles.label}>Telefone: (11) 98765-4321</Text>
      
      {/* Descrição sobre o usuário */}
      <Text style={styles.description}>
        Sou um estudante de graduação apaixonado por tecnologia e desenvolvimento de software. 
        Estou sempre em busca de novos desafios e oportunidades para aprender e crescer na minha carreira.
      </Text>

      {/* Interesses do usuário como tags */}
      <Text style={styles.interestsTitle}>Interesses:</Text>
      <View style={styles.interestsContainer}>
        {interests.map((interest, index) => (
          <View key={index} style={styles.interestTag}>
            <Text style={styles.interestText}>{interest}</Text>
          </View>
        ))}
      </View>

      {/* Botão para voltar */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#007BFF', // Adiciona uma borda ao redor da imagem
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
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  interestsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
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
    width: '80%', // Botão ocupa 80% da largura
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
