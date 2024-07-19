import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";


import ComponentCardShop from "../../../components/ComponentCardShop1";
import ComponentCardBox2 from "../../../components/ComponentCardBox2";
import ComponentCardBox3 from "../../../components/ComponentCardBox3";

const ShopItem1 = require("../../../../assets/icon.png");

const windowWidth = Dimensions.get("window").width;

export default function ShopItemLayout() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <ComponentCardShop />
      </View>
      <View style={styles.componentCardBox2}>
        <ComponentCardBox2 />
      </View>
      {/* Fim do componentCardBox2 */}
      <View style={styles.end}>
        <ComponentCardBox3 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 4,
  },
  header: {},

  navigationRight: {
    position: "absolute",
    right: 16,
    top: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  componentCardBox2: {},
  end: {},
});
