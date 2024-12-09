import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-paper";
import ComponentTitleSmall from "../../../components/ComponentTitleSmall";
import ComponentTextInput from "../../../components/ComponentTextInput";

export default function CardRegister() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Cartão</Text>
      <View style={styles.registerPanel}>
        {/* Bloco branco para o formulário */}
        <View style={styles.inputBlock}>
          <ComponentTitleSmall title="Número Do Cartão" />
          <ComponentTextInput placeholder="Número do Cartão" />

          <View style={styles.inlineContainer}>
            <View style={styles.inlineInput}>
              <ComponentTitleSmall title="Validade" />
              <ComponentTextInput
                style={styles.smallInput}
                placeholder="MM/AA"
              />
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
        </View>

        {/* Botão de registrar */}
        <Button
          style={styles.button}
          icon="registered-trademark"
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#fff"
          onPress={() => Alert.alert("Cartão cadastrado")}
        >
          Registrar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#201b2c",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    position: "relative",
    color: "#ffb800",
  },
  registerPanel: {
    marginTop: 40,
  },
  inputBlock: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
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
});
