import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Cadastro de conta</Text>
      <View style={styles.registerPanel}>
      <Text> Nome Completo</Text>
      <TextInput label="E-mail" mode="outlined" />
      <TextInput label="Senha" mode="outlined" />
      

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    justifyContent: "center",

  },

  registerPanel: {
    flex: 1,
    marginTop: 16,
    gap: 6,
    paddingHorizontal: 16,

  },

  containerImage: {
    alignItems: "center",

  },

  containerInput: {
    flex: 1,

  },

  link1: {
    color: "#069e6e",
    alignSelf: "flex-end",

  },

  buttom: {
    marginTop: 16,

  },

  text1: {
    fontSize: 24,
    marginTop: 14,
    color: "#000",


  },

  link2: {
    color: "#069e6e",

  },

  
});
