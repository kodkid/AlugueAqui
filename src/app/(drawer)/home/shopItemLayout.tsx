import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";


import ComponentCardShop from "../../../components/ComponentCardShop1";
import ComponentCardBox2 from "../../../components/ComponentCardBox2";
import ComponentCardBox3 from "../../../components/ComponentCardBox3";

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
      <View style={styles.end}>
      <ComponentCardBox3/>
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

  navigationRight: {
    position: "absolute",
    right: 16,
    top: 16,
    justifyContent: "center",
    alignItems: "center",
   
  },
  componentCardBox2: {
    backgroundColor:"#999"
    
  },
  end: {
    backgroundColor: "#999",
  }

});
