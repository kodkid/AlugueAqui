import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { router, } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer"
import { Button } from "react-native-paper";

import ComponentTextInputGlass from "../../../components/ComponentTextInputGlass";

const ShopItem1 = require("../../../../assets/images/shop-item-1.png");
const ShopItem2 = require("../../../../assets/images/shop-item-2.png");



export default function Home({ }) {
  return (
    <View style={styles.container}>
      <Drawer.Screen options={{
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }} />
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
