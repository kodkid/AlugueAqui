import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";

import ComponentTextInputGlass from "../../components/ComponentTextInputGlass";
const ShopItem1 = require("../../../assets/images/shop-item-1.png");
const ShopItem2 = require("../../../assets/images/shop-item-2.png");



export default function Home({ }) {
  return (
    <View style={styles.container}>
      <Text> Tela home</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

});
