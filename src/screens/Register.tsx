import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import ComponentTextInput from "../components/ComponentTextInput";
import ComponentTextTitle from "../components/ComponentText";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.registerPanel}>
        <ComponentTextTitle title="Digite seu nome completo" />
        <ComponentTextInput placeholder="Nome completo" />
        <ComponentTextTitle title="Digite seu e-mail " />
        <ComponentTextInput placeholder="e-mail" />
        <ComponentTextTitle title="Digite sua senha " />
        <ComponentTextInput placeholder="Senha" />
        <ComponentTextTitle title="Digite sua senha novamente " />
        <ComponentTextInput placeholder="Confirmar Senha" />

        <Button
          style={styles.buttom}
          icon="login"
          mode="elevated"
          buttonColor="#ffbd59"
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


  link2: {
    color: "#fbd796",
  },
  textPanel: {
    alignSelf: "flex-start",
    padding: 4,
  },
});
