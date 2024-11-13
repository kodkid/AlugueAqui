import React from "react";
import { StyleSheet, View } from "react-native";
import ComponentTitle6 from "./ComponentTitle6";
import { TextInput } from "react-native-paper";

const ComponentTextInputCEP = () => {
  return (
    <View style={styles.container}>
      <ComponentTitle6 title="Calcular Frete"></ComponentTitle6>
      <TextInput
        label="CEP"
        mode="flat"
        style={styles.input}
        underlineColor="orange"
        placeholder="60.879-098"
        theme={{ colors: { primary: "orange" } }} // Para a cor da borda ao focar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif"
  },
  input: {
    height: 50, 
    borderBottomWidth: 2,
    borderColor: "orange",
    backgroundColor: "#fff",
    width: "100%", 
  },
});

export default ComponentTextInputCEP;