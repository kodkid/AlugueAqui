import React from "react";
import { StyleSheet, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

import ComponentTitle6 from "./ComponentTitle6";

const ComponentCarrinho4 = () => {
  return (
    <View style={styles.container}>
      <Entypo name="shop" size={24} color="#FFB800" />
      <ComponentTitle6 title="Retirada em local"></ComponentTitle6>
      <ComponentTitle6 title="Grátis"></ComponentTitle6>
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
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#FFB800",
    overflow: "hidden",
    gap: 8,
    fontFamily: "sans-serif"
  },
});

export default ComponentCarrinho4;