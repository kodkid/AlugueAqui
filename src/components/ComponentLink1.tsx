import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

interface TextProps {
  title: string;
  onPress: () => void;
}

const ComponentLink1: React.FC<TextProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#FFB800",
  },
});

export default ComponentLink1;
