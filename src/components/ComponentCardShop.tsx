import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const ShopItem = require("../../../../assets/icon.png");

interface ImageNavigationProps {
  onPreviousPress: () => void;
  onNextPress: () => void;
}

const ImageNavigation: React.FC<ImageNavigationProps> = ({ onPreviousPress, onNextPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.shopItem} source={ShopItem} />
        <View style={styles.navigationLeft}>
          <TouchableOpacity onPress={onPreviousPress}>
            <AntDesign name="left" size={24} color="#A4A4A4" />
          </TouchableOpacity>
        </View>
        <View style={styles.navigationRight}>
          <TouchableOpacity onPress={onNextPress}>
            <AntDesign name="right" size={24} color="#A4A4A4" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerImage: {
    marginTop: 16, // Espaço acima da imagem
    alignItems: 'center',
  },
  shopItem: {
    height: 200,
    width: 200,
    resizeMode: "contain", // Ajuste o modo de redimensionamento conforme necessário
  },
  navigationLeft: {
    position: 'absolute',
    left: 16,
    top: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Para garantir que fique sobre a imagem
  },
  navigationRight: {
    position: 'absolute',
    right: 16,
    top: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Para garantir que fique sobre a imagem
  },
});

export default ImageNavigation;