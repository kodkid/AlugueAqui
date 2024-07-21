import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PseudoText2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porta efficitur sem nec interdum. Suspendisse potenti. Sed maximus{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  paragraph: {
    fontStyle: "italic",
    color: "#665E66",
  },
});

export default PseudoText2;
