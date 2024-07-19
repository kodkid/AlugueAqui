import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const ComponentCardBox3 = () => {
  <View style={styles.container}>
    <View style={styles.row}></View>
    <Pressable>
      <Text> Avaliações</Text>
    </Pressable>
    <Pressable>
      <Text> Informaçôes</Text>
    </Pressable>
    <Pressable>
      <Text> Formas de pagamento</Text>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",

  }
});

export default ComponentCardBox3;
