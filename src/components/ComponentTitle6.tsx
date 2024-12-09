import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string;
}

const ComponentTitle5: React.FC<TextProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 14,
    color: "#FFB800",
    fontFamily: "sans-serif",
  },
});

export default ComponentTitle5;