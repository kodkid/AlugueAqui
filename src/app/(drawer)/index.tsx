import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

import ComponentCarrinhoCard from "../../components/ComponentCarrinhoCard";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <View style={styles.cardsContainer}>
        <ScrollView contentContainerStyle={styles.cardsScroll}>
          <ComponentCarrinhoCard />
          <ComponentCarrinhoCard />
          <ComponentCarrinhoCard />
          <ComponentCarrinhoCard />
          <ComponentCarrinhoCard />
          {/* Adicione mais cards se necessário */}
        </ScrollView>
      </View>
      <View style={styles.part}>
        <Text>Texto</Text>
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
  part: {
    padding: 16,
  },
});