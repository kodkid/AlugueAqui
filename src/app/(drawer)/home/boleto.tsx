import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";

import PseudoText2 from "../../../components/PseudoTex2";
import ComponentTitle5 from "../../../components/ComponentTitle5";



export default function Boleto() {
  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <View style={styles.potTitle}>
          <Text style={styles.title}>Boleto bancário</Text>
        </View>
        <PseudoText2 />
      </View>
      <View style={styles.part}>
        <View style={styles.containCenter}>
          <ComponentTitle5 title="40021.89001" />
          <ComponentTitle5 title="20043.982247" />
          <ComponentTitle5 title="91020.150008 8 " />
          <ComponentTitle5 title="87980026000" />
        </View>
      </View>
      <View style={styles.part}>
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
    backgroundColor: "#fff",
    flex: 1, // Faz o contêiner preencher toda a tela
    flexDirection: "column", // Alinha os filhos em coluna (padrão)
  },
  part: {
    flex: 1,
    justifyContent: "center",
  },
  potTitle: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  typePix: {
    fontStyle: "italic",
    color: "#665E66",
  },
  containCenter: {
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 32,
    alignItems: "center",
    width: "100%", // Faz os botões ocuparem a largura total do contêiner
  },
  buttom1: {
    marginTop: 8,
    width: "90%",
  },
  buttom2: {
    marginTop: 8,
    width: "90%",
    borderColor: "#FFB800",
  },
});
