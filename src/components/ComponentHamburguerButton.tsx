import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de ter instalado e importado os ícones necessários

interface Props {
  onPress: () => void; // Função para lidar com o clique no botão
}

const ComponentHamburguerButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.iconContainer}>
        <Ionicons name="menu-outline" size={30} color="#000" /> {/* Ícone do menu hamburguer */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff", // Cor de fundo do botão
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ComponentHamburguerButton;