import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import PseudoText from "./PseudoText1";

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
    fontFamily: "sans-serif"
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
    borderBottomWidth: 2, 
    borderBottomColor: "#FFB800", 
  },
});

export default ComponentCardBox3;
