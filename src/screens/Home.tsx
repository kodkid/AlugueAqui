import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import ComponentTextInput from "../components/ComponentTextInput";
import ComponentTextInputGlass from "../components/ComponentTextInputGlass";

const Logo = require("../../assets/images/alugue-aqui-logo-1.png");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerNav}>
        <ImageBackground source={Logo} style={styles.background}>
          <View style={styles.inputPanel}>
            <ComponentTextInputGlass placeholder="Pesquisa"/>
         

          </View>
        </ImageBackground>
      </View>
      <View style={styles.shopPanel}>
        < Text> Teste</Text>
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
  containerNav: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,

  },
  background: {
    resizeMode: "cover",
    height: '100%',
    width: "100%",
  },
  inputPanel: {
    flex: 1,
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,


  },

  input: {
  

  

  },
  shopPanel: {
    flex: 1,


  }
});