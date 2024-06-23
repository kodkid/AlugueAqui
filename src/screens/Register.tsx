import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.registerPanel}>
        <Text style={styles.text1}>Cadastro de conta</Text>
        <Text> Nome Completo</Text>
        <TextInput label="Nome de usuario" mode="outlined" />
        <TextInput label="E-mail" mode="outlined" />
        <TextInput label="Senha" mode="outlined" />
        <TextInput label="Repita Senha" mode="outlined" />
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
