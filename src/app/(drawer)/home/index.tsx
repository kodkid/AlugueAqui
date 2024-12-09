import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

import ComponentCardBoxShop from "../../../components/ComponentCardBox1";
import ComponentTitle7 from "../../../components/ComponentTitle7";
import ComponentTitle6 from "../../../components/ComponentTitle6";

export default function Home({}) {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
          headerTitleStyle: {
            color: "#FFB800",
          },
        }}
      />
      <View style={styles.potTitle}>
        <ComponentTitle7 title="Ofertas em destaque" />
        <ComponentTitle6 title=" os melhores preços" />
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
    backgroundColor: "#201b2c",
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
  },
});
