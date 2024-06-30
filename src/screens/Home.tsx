
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ComponentTextInput from "../components/ComponentText";
import ComponentText from "../components/ComponentText";

const Logo = require("../../assets/images/alugue-aqui-logo-1.png");


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
        <Image source={Logo} style={styles.logo}></Image>
        </View>
        <View style={styles.contianerLink}>

        <Text style={styles.link}
          onPress={() => navigation.navigate("CardRegister")}
        >
          CardRegister
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
  contianerLink: {
    alignItems: "center",

  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignItems: "center",
  },
  link: {
    color: "#ffbd59",
    fontSize: 16,
    }

});
