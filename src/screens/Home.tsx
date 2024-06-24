import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ComponentTextInput from "../components/ComponentText";
import ComponentText from "../components/ComponentText";

const Banner = require("../../assets/images/banner.jpg");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}></View>
        <Image source={Banner} style={styles.logo}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignItems: "center",
  },
});
