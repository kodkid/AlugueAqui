import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Pix() {
  return (
    <View style={styles.container}>
      <Text> Pagar com pix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
