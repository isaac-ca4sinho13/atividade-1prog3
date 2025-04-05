import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, Text, Avatar } from '@rneui/themed';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
      />
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button
        title="Entrar"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Criar conta"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('RecuperarSenha')}
      >
        Esqueceu a senha?
      </Text>
    </View>
  );
}

function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry />
      <Button
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default function RecuperarSenhaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar senha</Text>
      <Text style={styles.label}>Informe seu e-mail</Text>
      <TextInput style={styles.input} />
      <Button
        title="Enviar"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    borderRadius: 20,
    width: 250,
    marginTop: 10,
  },
  link: {
    marginTop: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
