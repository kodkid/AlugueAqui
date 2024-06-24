import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ComponentTextInput from "../components/ComponentTextInput";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.registerPanel}>
        <Text style={styles.text1}>Cadastro de conta</Text>
        <Text> Nome Completo</Text>
        <ComponentTextInput placeholder="Nome de Usuario"/>
        <ComponentTextInput placeholder="Email"/>
        <ComponentTextInput placeholder="Senha"/>
        <ComponentTextInput placeholder="Confirmar Senha"/>
        
        
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
        <Text style={styles.link1} onPress={() => navigation.navigate("Login")}>
          {" "}
          Voltar
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
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
    color: "#000",
    alignSelf: "flex-start",
  },

  buttom: {
    marginTop: 8,
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
