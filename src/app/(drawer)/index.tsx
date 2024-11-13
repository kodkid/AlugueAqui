import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Button } from "react-native-paper";
import { DrawerToggleButton } from "@react-navigation/drawer";

import ComponentTitle5 from "../../components/ComponentTitle6";
import ComponentCarrinho from "../../components/ComponentCarrinho";
import ComponentCarrinho3 from "../../components/ComponentCarrinho3";
import ComponentCarrinho4 from "../../components/ComponentCarrinho4";
import ComponentTextInputCEP from "../../components/ComponentTextInputCEP";
import ComponentTextShopCalc from "../../components/ComponentTextShopCalc";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }
      }
        
      />
      <View style={styles.cardsContainer}>
        <ScrollView contentContainerStyle={styles.cardsScroll}>
          <ComponentCarrinho />
          <ComponentCarrinho />
          <ComponentCarrinho />
          <ComponentCarrinho />
          <ComponentCarrinho />
        </ScrollView>
      </View>
      <View style={styles.part1}>
        <View style={styles.part1_textInputCEP}>
        <ComponentTextInputCEP ></ComponentTextInputCEP>
        </View>
        <View style={styles.part1_cardGroup}>
        <ComponentCarrinho3></ComponentCarrinho3>
        <ComponentCarrinho4></ComponentCarrinho4>
        </View>
      </View>
      <View style={styles.part2}>
        <ComponentTextShopCalc></ComponentTextShopCalc>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardsContainer: {
    flex: 1,
    maxHeight: 500, // Ajuste esse valor para definir a altura máxima dos cartões
    paddingBottom: 16, // Espaçamento inferior para o ScrollView
  },
  cardsScroll: {
    flexGrow: 0, // Impede que o ScrollView expanda além do necessário
  },
  part1: {
    flex: 1,
  },
  part1_textInputCEP: {
    justifyContent: "center",
    

  },
  part1_cardGroup: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    paddingRight: 40,
    paddingLeft: 40,
    gap: 8,
    overflow: "hidden",
  },
  part2: {
    flex:1,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    paddingRight: 40,
    paddingLeft: 40,
    overflow: "hidden"
  },
 
});
