import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";

import ComponentTextInputGlass from "../components/ComponentTextInputGlass";
import ComponentCardShop from "../components/ComponentCardShop";
const Banner = require("../../assets/images/banner.jpg");
const ShopItem1 = require("../../assets/images/shop-item-1.png");
const ShopItem2 = require("../../assets/images/shop-item-2.png");



export default function Home({ }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerNav}>
        <ImageBackground source={Banner} style={styles.background}>
          <View style={styles.inputPanel}>
            <ComponentTextInputGlass placeholder="Pesquisa" />
          </View>
        </ImageBackground>
      </View>
      {/* fim do container Nav */}
      <View style={styles.containerShop}>
        <View style={styles.textPot}>
          <Text style={styles.textTitle}> Ofertas especiais</Text>
          <Text style={styles.textParagraph}>Os melhores preços</Text>
        </View>
        <View style={styles.shopPanel}>

        </View>
        {/* fim do shopPanel */}
      </View>
      <ComponentCardShop />
      {/* fim do Container Shop */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  containerNav: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 8,
  },
  background: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  inputPanel: {
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,
  },
  containerShop: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#999",
  },
  textPot: {
    height: "15%",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    gap: 4,
    marginTop: 4,
    backgroundColor: "#919",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    paddingHorizontal: 14,
  },
  textParagraph: {
    fontSize: 16,
    fontStyle: "italic",
    paddingHorizontal: 20,
  },
  shopPanel: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#997",
  },

});
