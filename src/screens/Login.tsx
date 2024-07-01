
import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";

import ComponentTextInput from "../components/ComponentTextInput";
import ComponentText from "../components/ComponentText";


const Logo =require("../../assets/images/alugue-aqui-logo-1.png");


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        {/* fim do ContainerImage */}
        <View style={styles.containerInput}>

          <ComponentText title="Digite seu email"></ComponentText>
          <ComponentTextInput placeholder="Login" />
          <ComponentText title="Digite sua senha"></ComponentText>
          <ComponentTextInput placeholder="Senha" />

          <Text
            style={styles.link1}
            onPress={() => navigation.navigate("Recovery")}
          >
            {" "}
            Esqueci a Senha
          </Text>

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

          <Text style={styles.text}>
            {" "}
            Não possui uma conta?{" "}
            <Text
              style={styles.link2}
              onPress={() => navigation.navigate("Register")}
            >
              {" "}
              Cadastre-se
            </Text>
          </Text>

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
    flexDirection: "column",
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

    resizeMode: "contain",
    alignItems: "center",

  },

  containerInput: {
    flex: 1,

    gap: 6,
  },

  link1: {
    color: "#fbd796",
    alignSelf: "flex-end",



  },

  buttom: {
    marginTop: 16,

  },

  text: {
    fontSize: 14,
  },

  link2: {
    color: "#fbd796",
  },

});

