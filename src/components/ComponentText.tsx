import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string;
}

const ComponentText: React.FC<TextProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#fbd796",
  },
});

export default ComponentText;
