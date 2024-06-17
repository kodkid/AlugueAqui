import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';

const Logo = require('../../assets/images/logo.png');



export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        {/* fim do ContainerImage */}
        <View style={styles.containerInput}>
          <TextInput label="E-mail" mode="outlined" />
          <TextInput label="Senha" mode="outlined" />
          <Text style={styles.link1}
            onPress={() => navigation.navigate("Recovery")}> Esqueci a Senha</Text>
          <Button
            style={styles.buttom}
            icon="login"
            mode="elevated"
            buttonColor="#008080"
            textColor="#fff"
            onPress={() => navigation.navigate("Home")}
          >
            Login
          </Button>
          <Text style={styles.text}> Não tem conta? <Text style={styles.link2}
            onPress={() => navigation.navigate("Home")}> Criar Conta</Text></Text>

        </View>
        {/* fim do ContainerImage */}
      </View>
      {/* fim do Login */}
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

  loginPanel: {
    flex: 1,
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,

  },

  containerImage: {
    alignItems: "center",

  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: "center"

  },

  containerInput: {
    flex: 1,

  },

  link1: {
    color: "green",
    alignSelf: "flex-end",

  },

  buttom: {
    marginTop: 16,

  },

  text: {
    fontSize: 15,

  },

  link2: {
    color: "green",

  },

});
