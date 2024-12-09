import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string;
}

const ComponentTitle2: React.FC<TextProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginTop: 14,
    color: "#313131",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
});

export default ComponentTitle2;