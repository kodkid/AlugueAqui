import React from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { router, Link  } from "expo-router";

import ComponentTextInput from "../components/ComponentTextInput";
import ComponentText from "../components/ComponentText";
import ComponentTextInputPassword from '../components/ComponentTextInputPassword';


const Logo = require("../../assets/images/alugue-aqui-logo-2.png");

export default function Login({ }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        {/* fim do ContainerImage */}
        <View style={styles.containerInput}>
          <ComponentText title="Digite seu email" />
          <ComponentTextInput placeholder="Login" />
          <ComponentText title="Digite sua senha" />
          <ComponentTextInputPassword placeholder='Digite sua senha'/>

          <Text
            style={styles.link1}
            onPress={() => router.push("/recovery")}
          >
            Esqueci a Senha
          </Text>

          <Button
            style={styles.buttom}
            icon="login"
            mode="elevated"
            buttonColor="#ffbd59"
            textColor="#fff"
            onPress={() => router.push("/home")}
          >
            Login
          </Button>

          <Text style={styles.text}>
            Não possui uma conta?{" "}
            <Text
              style={styles.link2}
              onPress={() => router.push("register")}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>
        {/* fim do ContainerImage */}
      </View>
      {/* fim do Login */}
      <Link href="cardRegister"> Tela de Screens</Link>
      <Link href="pay"> Tela de pagamento</Link>
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
    color: "#ffbd59",
    alignSelf: "flex-end",
  },
  buttom: {
    marginTop: 16,
  },
  text: {
    fontSize: 14,
  },
  link2: {
    color: "#ffbd59",
  },
});