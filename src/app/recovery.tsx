import React from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { Button } from "react-native-paper";
import { router } from "expo-router";

import ComponentTitle from "../components/ComponentTitle";
import ComponentTextInput from "../components/ComponentTextInput";

export default function Recovery() {

  return (
    <View style={styles.container}>
      <ComponentTitle title="Recuperar conta" />
      <ComponentTextInput placeholder="Digite o email da conta a recuperar" />
      <Button
        style={styles.buttom}
        icon="login"
        mode="elevated"
        buttonColor="#FFB800"
        textColor="#fff"
        onPress={() =>
          Alert.alert(
            "Alerta",
            "Tem certeza que deseja enviar o email?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "Confirmar",
                onPress: () => router.push("/"),
              },
            ],
            { cancelable: false }
          )
        }
      >
        Login
      </Button>
      <Text style={styles.link} onPress={() => router.push("/")}>
        Voltar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    justifyContent: "center",

    gap: 2,
  },
  buttom: {
    marginTop: 16,
  },
  link: {
    color: "#000",
    alignSelf: "flex-start",
    marginTop: 10,
  },
});