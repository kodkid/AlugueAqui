import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native-paper";

import PseudoText2 from "../../../components/PseudoTex2";
import ComponentTitle3 from "../../../components/ComponentTitle3";

export default function ThreePartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <Text>Pix</Text>
        <PseudoText2 />
      </View>
      <View style={styles.part}>
        <ComponentTitle3 title="40.028.922/0001-42"></ComponentTitle3>
      </View>
      <View style={styles.part}>
        <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttom1}
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#000"
          onPress={() => Alert.alert("Codigo copiado") }
        >
          Copiar Codigo
        </Button>
        <Button
          style={styles.buttom2}
          mode="outlined"
          buttonColor="#fff"
          textColor="#FFB800"
          onPress={() => Alert.alert("Email enviado") }
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
