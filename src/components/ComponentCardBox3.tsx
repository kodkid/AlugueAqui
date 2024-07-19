import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import PseudoText from "../components/PseudoText";

const ComponentCardBox3: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable>
          <Text> Avaliações</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.info}> Informaçôes</Text>
        </Pressable>
        <Pressable>
          <Text> Formas de pagamento</Text>
        </Pressable>
      </View>
      <View>
        <PseudoText />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  info: {
    color: "#FFB800",
    borderRadius: 4,
    borderEndWidth: 4,
    borderEndColor: "#FFB800",
    borderBottomWidth: 2, // Define a largura da borda inferior
    borderBottomColor: "#FFB800", // Define a cor da borda inferior
  },
});

export default ComponentCardBox3;
