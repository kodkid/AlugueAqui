import React from "react";
import { StyleSheet, Text, View, Alert, Dimensions } from "react-native";
import { Button } from "react-native-paper";

import ComponentTitle5 from "../../../components/ComponentTitle5";

// Pegando as dimensões da tela
const { width, height } = Dimensions.get("window");

export default function Boleto() {
  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <View style={styles.potTitle}>
          <Text style={styles.title}>Pix</Text>
        </View>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porta efficitur sem nec interdum. Suspendisse potenti. Sed maximus
          {""}
        </Text>
      </View>

      {/* Box centralizada */}
      <View style={styles.bottomContent}>
        <View style={styles.containCenter}>
          <ComponentTitle5 title="40.028.922/00001-42" />
          <Text style={styles.cnpj}>Tipo CNPJ</Text>
        </View>

        {/* Botões */}
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttom1}
            mode="elevated"
            buttonColor="#FFB800"
            textColor="#000"
            onPress={() => Alert.alert("Codigo copiado")}
          >
            Copiar Codigo
          </Button>
          <Button
            style={styles.buttom2}
            mode="outlined"
            buttonColor="#fff"
            textColor="#FFB800"
            onPress={() => Alert.alert("Email enviado")}
          >
            Enviar codigo via-email
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#201b2c",
    flex: 1, // O container ocupa toda a tela
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    // Para garantir que o conteúdo não encoste nas bordas da tela
  },
  part: {
    marginBottom: 4,
    justifyContent: "center",
    width: "100%", // A largura ocupa 100% da tela
  },
  potTitle: {
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffb800",
    position: "relative",
    left: 28,
    textAlign: "left",
  },
  typePix: {
    fontStyle: "italic",
    color: "#fff",
  },
  containCenter: {
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 16,
    alignItems: "center",
    width: "100%",
  },
  buttom1: {
    marginTop: 8,
    width: width * 0.9, // 90% da largura da tela
  },
  buttom2: {
    marginTop: 8,
    width: width * 0.9, // 90% da largura da tela
    borderColor: "#FFB800",
  },
  paragraph: {
    fontStyle: "italic",
    color: "#fff",
    textAlign: "center", // Centraliza o parágrafo
    marginVertical: 8, // Espaço entre o parágrafo e outros elementos
  },
  cnpj: {
    fontStyle: "italic",
    color: "#a1a1a1",
    textAlign: "center", // Centraliza o parágrafo
    marginVertical: 8, // Espaço entre o parágrafo e outros elementos
  },
  bottomContent: {
    width: "100%", // Garantir que a largura da box seja 90% da tela
    height: "60%",
    maxWidth: 400, // Limita a largura máxima da box para não ficar muito larga em telas grandes
    backgroundColor: "#fff",
    padding: 16, // Espaçamento interno
    borderRadius: 10, // Adicionando borda arredondada
    alignItems: "center", // Centraliza os itens dentro da box
    justifyContent: "center", // Centraliza os itens verticalmente
  },
});
