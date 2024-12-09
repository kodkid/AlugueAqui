import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Pressable,
  Text,
} from "react-native";
import { router } from "expo-router";
import ComponentTitle2 from "../components/ComponentTitle9";
import ComponentTitle8 from "../components/ComponentTitle8";
const Logo = require("../../assets/images/alugue-aqui-logo-2.png");
const Bg = require("../../assets/images/index-bg.jpg");

const NavigateLogin = () => {
  router.push("login");
};

export default function Index({}) {
  return (
    <View style={styles.container}>
      <ComponentTitle8 title="Olá, Seja"></ComponentTitle8>
      <ComponentTitle8 title="Bem vindo!"></ComponentTitle8>
      <View style={styles.containerIndex}>
        <View style={styles.potImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        <View style={styles.potTitle}>
          <ComponentTitle2 title="Aqui você pode" />
          <ComponentTitle2 title="alugar é arrendar." />
        </View>
        <Pressable style={styles.potButtom} onPress={NavigateLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#ffb800",
  },
  containerIndex: {
    justifyContent: "center",
    height: "60%",
    width: 395,
    backgroundColor: "#fff",
    marginTop: 32,
    borderRadius: 15,
  },
  potImage: {
    flex: 1 / 3,
    alignItems: "center",
    marginEnd: 8,
  },
  potTitle: {
    flex: 2 / 3,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 8,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignItems: "center",
  },
  potButtom: {
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    marginEnd: 16,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#A1A1A1", // Borda preta
    backgroundColor: "#fff", // Fundo branco
    padding: 12, // Ajusta o tamanho do botão
  },
  buttonText: {
    fontSize: 18,
    color: "#000", // Cor do texto
    fontWeight: "bold",
  },
});
