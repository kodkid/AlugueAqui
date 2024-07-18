import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import ComponentCardShop from "../../../components/ComponentCardShop1";
import ComponentCardBox2 from "../../../components/ComponentCardBox2";

const ShopItem1 = require("../../../../assets/icon.png");

const windowWidth = Dimensions.get("window").width;

export default function ShopItemLayout() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <ComponentCardShop />
      <View style={styles.componentCardBox2}>
        <ComponentCardBox2 />
      </View>
      {/* Fim do componentCardBox2 */}
      <View style={styles.containerButtom}>
        <Button
          style={styles.button}
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#fff"
          onPress={() => console.log("Alugar")}
        >
          Alugar
        </Button>
        <Button
          style={styles.buttom2}
          mode="outlined"
          buttonColor="#fff"
          textColor="#FFB800"
          onPress={() => console.log("Adicionar a sacola")}
        >
          Adicionar a sacola
        </Button>
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
    alignItems: "center",
  },
  shopItem: {
    height: 200,
    width: 200,
    resizeMode: "contain", // Ajuste o modo de redimensionamento conforme necessário
  },
  navigationLeft: {
    position: "absolute",
    left: 16,
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Para garantir que fique sobre a imagem
    marginTop: 64,
  },
  navigationRight: {
    position: "absolute",
    right: 16,
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1, // Para garantir que fique sobre a imagem
    marginTop: 64,
  },
  componentCardBox2: {
    backgroundColor: "#999",
    height: "30%",
  },
  containerButtom: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 8,
    width: "90%", 
  },
  buttom2: {
    marginTop: 8,
    width: "90%", 
    borderColor: "#FFB800"
  }
});
