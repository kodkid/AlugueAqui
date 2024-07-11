import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Pressable,
  Text
} from "react-native";
import { Button } from "react-native-paper";
import { router, Link } from "expo-router";
import ComponentTitle2 from "../components/ComponentTitle2";
const Logo = require("../../assets/images/alugue-aqui-logo-2.png");
const Bg = require("../../assets/images/index-bg.jpg");

const NavigateLogin = () => {
  router.push("login");
};

export default function Login({}) {
  return (
    <ImageBackground source={Bg} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.containerIndex}>
          <View style={styles.potImage}>
            <Image source={Logo} style={styles.logo}></Image>
          </View>
          <View style={styles.potTitle}>
            <ComponentTitle2 title="Aqui você pode" />
            <ComponentTitle2 title="alugar é arrendar" />
          </View>
          <View style={styles.potButtom}>
            <Pressable onPress={NavigateLogin}>
              <Link href={"login"}> Entrar</Link>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerIndex: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "75%",
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 2,
    borderRadius: 16,
  },
  potImage: {
    alignItems: "center",
    backgroundColor: "#999",
    marginEnd: 8,
  },
  potTitle: {
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
    gap: 4,
    margin: 16,
    marginEnd: 16,
    backgroundColor: "#999",
    justifyContent: "center",
    alignItems: "center",
  },
  buttom: {},
});
