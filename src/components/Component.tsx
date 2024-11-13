import React from "react";
import { StyleSheet, View } from "react-native";

const ComponentCardContentBorderOrange = () => {
  return (
    <View style={styles.cardContent}></View> // Usando return
  );
};

const styles = StyleSheet.create({
  cardContent: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#FFB800",
    height: 160,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    fontFamily: "sans-serif"
  },
});

export default ComponentCardContentBorderOrange;