import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ComponentTextInput from "../components/ComponentTextInput";
import ComponentText from "../components/ComponentText";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.registerPanel}>
        <ComponentText title="Digite seu nome completo" />
        <ComponentTextInput placeholder="Nome completo" />
        <ComponentText title="Digite seu e-mail " />
        <ComponentTextInput placeholder="e-mail" />
        <ComponentText title="Digite sua senha " />
        <ComponentTextInput placeholder="Senha" />
        <ComponentText title="Digite sua senha novamente " />
        <ComponentTextInput placeholder="Confirmar Senha" />

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
        <View>
          <Text style={styles.textPanel}>
            {" "}
            Já possui uma conta?{" "}
            <Text
              style={styles.link2}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Logar
            </Text>
          </Text>
        </View>
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

  titulo1: {
    fontSize: 24,
    marginTop: 14,
    color: "#000",
  },
  text: {
    fontSize: 16,
    marginTop: 14,
    color: "#000",
  },

  link2: {
    color: "#069e6e",
  },
  textPanel: {
    alignSelf: "flex-start",
    padding: 4,
  },
});
