import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";


// Definindo o tipo para os itens da lista
interface LinkItem {
  id: string;
  title: string;
}

export default function Configuracoes() {
  // Lista de links para a tela de configurações
  const links: LinkItem[] = [
    { id: "1", title: "História de Compra" },
    { id: "2", title: "Cadastrar Cartão" },
    { id: "3", title: "Conta" },
    { id: "4", title: "Sair" }
  ];

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: LinkItem }) => (
    <TouchableOpacity style={styles.linkContainer}>
      <Text style={styles.linkText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <FlatList
        data={links}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.linksList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    fontFamily: "sans-serif",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  linksList: {
    marginTop: 20,
  },
  linkContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FFB800",
  },
  linkText: {
    fontSize: 18,
    color: "#FFB800",
  },
});