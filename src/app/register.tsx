
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";
import ComponentTextInput from "../components/ComponentTextInput";
import ComponentTitle from "../components/ComponentTitle";


export default function Register({ }) {

  function Registrar() {
    router.push("/");
  }
  return (
    <View style={styles.container}>

      <View style={styles.registerPanel}>
        <ComponentTitle title="Digite seu nome completo" />
        <ComponentTextInput placeholder="Nome completo" />
        <ComponentTitle title="Digite seu e-mail " />
        <ComponentTextInput placeholder="e-mail" />
        <ComponentTitle title="Digite sua senha " />
        <ComponentTextInput placeholder="Senha" />
        <ComponentTitle title="Digite sua senha novamente " />
        <ComponentTextInput placeholder="Confirmar Senha" />

        <Button
          style={styles.buttom}
          icon="registered-trademark"
          mode="elevated"
          buttonColor="#ffbd59"
          textColor="#fff"
          onPress={Registrar}
        >
          Cadastrar
        </Button>
        <View>
          <Text style={styles.textPanel}>
            {" "}
            Já possui uma conta?{" "}
            <Text
              style={styles.link2}
              onPress={() => router.push("/")}
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

  }
}
);