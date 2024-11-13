import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import ComponentTitle6 from "./ComponentTitle6";

const ComponentCarrinho3 = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="home" size={24} color="#FFB800" />
      <ComponentTitle6 title="Receber em casa"></ComponentTitle6>
      <ComponentTitle6 title="R$ 40,00"></ComponentTitle6>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1/3, 
    justifyContent: "space-evenly", 
    alignItems: "center", 
    backgroundColor: "#f8f8f8",
    flexDirection:"row",
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#FFB800",
    overflow: "hidden",
    gap: 8,
    fontFamily: "sans-serif"
  },
});

export default ComponentCarrinho3;