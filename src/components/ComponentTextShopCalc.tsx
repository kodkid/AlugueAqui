import React from "react";
import { StyleSheet, View } from "react-native";
import { Text , Button } from 'react-native-paper';
import { router } from "expo-router";

const ComponentTextShopCalc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container_title} theme={{ colors: { primary: '#555' } }} variant="titleLarge">Resumo</Text>
      
      <View style={styles.container_text}>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall">Valor dos produtos</Text>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall" style={styles.value}>R$ 585,00</Text>
      </View>
      
      <View style={styles.container_text}>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall">Valor do frete</Text>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall" style={styles.value}>R$ 40,00</Text>
      </View>
      
      <View style={styles.container_text}>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall">Descontos</Text>
        <Text theme={{ colors: { primary: '#A4A4A4' } }} variant="titleSmall" style={styles.value}>10%</Text>
      </View>
      <View style={styles.container_button}>
      <Button
          style={styles.buttom}
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#000"
          onPress={() => router.push("home/pay")}
        >
          Comprar
        </Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "stretch", 
  },
  container_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10, 
  },
  container_text: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 10, 
  },
  value: {
    textAlign: "right", 
  },
  buttom: {
    marginTop: 8,
    width: "100%",
  },
  container_button: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"

  }
});

export default ComponentTextShopCalc;