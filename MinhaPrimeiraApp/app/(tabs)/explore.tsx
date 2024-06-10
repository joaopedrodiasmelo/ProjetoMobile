import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText, ThemedView } from '@/components/ThemedComponents'; // Supondo que você tenha esses componentes personalizados

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Password:', password);
    // Navegar para a tela principal após o login bem-sucedido
    navigation.navigate('Home');
  };

  return (
    <ThemedView style={styles.container}>
      <Ionicons name="person-circle-outline" size={100} color="gray" style={styles.icon} />
      <ThemedText type="title" style={styles.title}>Entrar</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <ThemedText type="link" style={styles.link}>Não tem uma conta? Registre-se</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;