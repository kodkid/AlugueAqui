import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const ShopItem1 = require("../../assets/icon.png");

const ComponentCardShop1: React.FC = () => {

  return (
    <View style={styles.containerImage}>
      <Image style={styles.shopItem} source={ShopItem1} />
      <View style={styles.navigationLeft}>
        <TouchableOpacity onPress={() => {/* Função para navegar para a imagem anterior */ }}>
          <AntDesign name="left" size={24} color="#A4A4A4" />
        </TouchableOpacity>
      </View>
      <View style={styles.navigationRight}>
        <TouchableOpacity onPress={() => {/* Função para navegar para a próxima imagem */ }}>
          <AntDesign name="right" size={24} color="#A4A4A4" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    marginTop: 16,
    alignItems: 'center',
  },
  shopItem: {
    height: 200,
    width: 200,
    resizeMode: "contain", 
  },
  navigationLeft: {
    position: 'absolute',
    left: 16,
    top: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
    marginTop: 64,
  },
  navigationRight: {
    position: 'absolute',
    right: 16,
    top: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, 
    marginTop: 64,
  },
});

export default ComponentCardShop1;