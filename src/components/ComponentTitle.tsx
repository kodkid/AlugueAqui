import React from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string;
}

const ComponentTitle: React.FC<TextProps> = ({ title }) => {
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
    color: "#ffbd59",
  },
});

export default ComponentTitle;
