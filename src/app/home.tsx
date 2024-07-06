import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";

import ComponentTextInputGlass from "../components/ComponentTextInputGlass";
import ComponentCard from "../components/ComponentCard";
const Banner = require("../../assets/images/banner.jpg");
const ShopItem1 = require("../../assets/images/shop-item-1.png");
const ShopItem2 = require("../../assets/images/shop-item-2.png");

import { FontAwesome } from "@expo/vector-icons";


export default function Home({}) {
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
          <View style={styles.boxShop}>
            <View style={styles.imageBox}>
              <Image source={ShopItem1} style={styles.ShopItem}></Image>
            </View>
            {/* fim do imageBox */}
            <View style={styles.infoItem}>
              <Text style={styles.titleBoxShop}> Nome do item</Text>
              <Text style={styles.titleBoxShop}> R$ 40 </Text>
              <FontAwesome
                style={styles.icon}
                name="heart"
                size={24}
                color="#ff505A"
              />
            </View>
          </View>
          {/* fim do shopBox */}
          
        </View>
        {/* fim do shopPanel */}
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
  boxShop: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    margin: 10,
  },
  imageBox: {
    backgroundColor: "#988",
    height: 90,
    width: 75, // Largura da imagem
    justifyContent: "center",
    alignItems: "center",
  },
  infoItem: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#952",
    height: "100%",
    width: "auto",
  },
  titleBoxShop: {
    backgroundColor: "#999",
    height: 18,
    width: 100, // Largura do texto
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  ShopItem: {
    height: 75,
    width: 75,
  },
  icon: {
    justifyContent: "center",
    alignSelf: "flex-end",
    marginHorizontal: 12,
    marginTop: 4,
  },
});
