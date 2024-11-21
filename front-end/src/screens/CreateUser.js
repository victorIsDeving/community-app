import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

const CreateUser = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [descricao, setDescricao] = useState("");

  const handlePhoneChange = (text) => {
    // Remove tudo que não é número
    const cleaned = text.replace(/\D/g, "");

    // Limite de 11 números
    const limited = cleaned.slice(0, 11);

    // Formata o número (XX) XXXXX-XXXX
    let formatted = limited;
    if (limited.length > 2) {
      formatted = `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    }
    if (limited.length > 7) {
      formatted = `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }

    setTelefone(formatted);
  };

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para um back-end ou salvar localmente
    console.log({
      nome,
      telefone,
      email,
      senha,
      descricao,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}></View>
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verificar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#8e8e93"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#8e8e93"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={handlePhoneChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#8e8e93"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#8e8e93"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Sua descrição"
          placeholderTextColor="#8e8e93"
          multiline
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Interesses</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#f7f9fc",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    avatarContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#BBDEFB", 
      marginBottom: 10,
    },
    verifyButton: {
      backgroundColor: "#1976D2", 
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 20,
    },
    verifyButtonText: {
      color: "#FFF", 
      fontWeight: "600",
    },
    inputContainer: {
      width: "100%",
      marginBottom: 15,
    },
    input: {
      backgroundColor: "#f7f9fc", 
      height: 50,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      color: "#000", 
      borderWidth: 1,
      borderColor: "#90CAF9", 
    },
    textAreaContainer: {
      width: "100%",
      marginBottom: 20,
    },
    textArea: {
      backgroundColor: "#f7f9fc", 
      height: 100,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
      color: "#000", 
      borderWidth: 1,
      borderColor: "#90CAF9", 
    },
    button: {
      backgroundColor: "#007BFF", 
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: "#FFF", 
      fontSize: 16,
      fontWeight: "600",
    },
  });

export default CreateUser;
