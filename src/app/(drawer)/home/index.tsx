import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { router, } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton, } from "@react-navigation/drawer"

import ComponentCardBoxShop from "../../../components/ComponentCardBox1";
import ComponentTitle from "../../../components/ComponentTitle";
import ComponentText from "../../../components/ComponentText";


export default function Home({ }) {
  return (
    <View style={styles.container}>
      <Drawer.Screen options={{
        headerShown: true,
        headerLeft: () => <DrawerToggleButton />,
      }} />
      <View style={styles.potTitle}>
        <ComponentTitle title="Ofertas em destaque" />
        <ComponentText title=" os melhores preços" />
      </View>
      {/* Final do potTitle*/}
      <View style={styles.potCard}>
        <ComponentCardBoxShop />
        <ComponentCardBoxShop />
        <ComponentCardBoxShop />
      </View>
      {/* Final do potCard*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: 16,
    paddingHorizontal: 8,
    gap: 8,
    padding: 4,

  },
  potTitle: {
    justifyContent: "center",
  },
  potCard: {
    justifyContent: "center",
    gap: 8,
    padding: 4,

  }

});
