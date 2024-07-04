import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from 'expo-router';

import ComponentTextInputGlass from "../components/ComponentTextInputGlass";
const Banner = require("../../assets/images/banner.jpg");
const ShopItem1 = require("../../assets/images/shop-item-1.jpg")
const ShopItem2 = require("./../../assets/images/shop-item-2.jpg")

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
          <Text style={styles.text} > Ofertas especiais</Text>
        </View>
        <View style={styles.shopPanel}>
          <View style={styles.boxShop}></View>
          <Image source={ShopItem2} style={styles.ShopItem}></Image>
        </View>
        <Link href={"/cardRegister"}>cardRegister</Link>
      </View>
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
    height: '100%',
    paddingHorizontal: 8,
  },
  background: {
    resizeMode: "cover",
    height: '100%',
    width: "100%",
  },
  inputPanel: {
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,
  },
  containerShop: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignSelf: "center",
  },
  textPot: {
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: "italic",
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,
    color: "#000",

  },
  shopPanel: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
  boxShop: {
    height: 100,
    width: 100,
    backgroundColor: "#000",

  },
  ShopItem: {
    height: 50,
    width: 50,

  }
});