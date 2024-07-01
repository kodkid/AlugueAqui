import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string; 
  onPress: () => void;
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
    color: "#ffbd59",
  },
});

export default ComponentText;
