import React from "react";
import { StyleSheet, View, Image, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import { router } from "expo-router";

import ComponentTextInput from "../../components/ComponentTextInput";
import ComponentText from "../../components/ComponentText";
import ComponentTextInputPassword from "../../components/ComponentTextInputPassword";

const Logo = require("../../../assets/images/alugue-aqui-logo-2.png");

const RedirecionamentoHome = () => router.push("/(drawer)/home");
export default function Login({}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFB800" barStyle={"light-content"} />
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        {/* fim do ContainerImage */}
        <View style={styles.containerInput}>
          <ComponentText title="Digite seu email" />
          <ComponentTextInput placeholder="Login" />
          <ComponentText title="Digite sua senha" />
          <ComponentTextInputPassword placeholder="Digite sua senha" />

          <Text
            style={styles.link1}
            onPress={() => router.push("login/recovery")}
          >
            Esqueci a Senha
          </Text>

          <Button
            style={styles.buttom}
            icon="login"
            mode="elevated"
            buttonColor="#FFB800"
            textColor="#fff"
            onPress={RedirecionamentoHome}
          >
            Cadastre-se
          </Button>

          <Text style={styles.text}>
            Não possui uma conta?{" "}
            <Text
              style={styles.link2}
              onPress={() => router.push("login/register")}
            >
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
    color: "#FFB800",
    alignSelf: "flex-end",
  },
  buttom: {
    marginTop: 16,
  },
  text: {
    fontSize: 14,
  },
  link2: {
    color: "#FFB800",
  },
});
