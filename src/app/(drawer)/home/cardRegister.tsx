import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { router, Link } from "expo-router";
import { Button } from "react-native-paper";
import ComponentTitleSmall from "../../../components/ComponentTitleSmall";
import ComponentTextInput from "../../../components/ComponentTextInput";

export default function CardRegister({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Cartão</Text>
      <View style={styles.registerPanel}>
        <ComponentTitleSmall title="Número Do Cartão" />
        <ComponentTextInput placeholder="Número do Cartão" />

        <View style={styles.inlineContainer}>
          <View style={styles.inlineInput}>
            <ComponentTitleSmall title="Validade" />
            <ComponentTextInput style={styles.smallInput} placeholder="MM/AA" />
          </View>
          <View style={styles.inlineInput}>
            <ComponentTitleSmall title="CVC" />
            <ComponentTextInput style={styles.smallInput} placeholder="CVC" />
          </View>
        </View>

        <ComponentTitleSmall title="Titular do cartão" />
        <ComponentTextInput placeholder="Titular do cartão" />
        <ComponentTitleSmall title="CPF do titular" />
        <ComponentTextInput placeholder="CPF do titular" />

        <Button
          style={styles.button}
          icon="registered-trademark"
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#fff"
          onPress={() => router.push("/")}
        >
          Registrar
        </Button>

        <View style={styles.textPanel}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    position: 'absolute',
    top: 10, // Ajuste a posição conforme necessário
    left: 16,
    marginTop: 60
  },
  registerPanel: {
    marginTop: 40, // Ajuste conforme necessário para posicionar abaixo do título
  },
  inlineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inlineInput: {
    flex: 1,
    marginRight: 10,
  },
  smallInput: {
    width: "100%",
  },
  button: {
    marginTop: 16,
  },
  textPanel: {
    alignSelf: "flex-start",
    marginTop: 16,
  },
  link: {
    color: "#FFB800",
  },
});

