import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PseudoText: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        porta efficitur sem nec interdum. Suspendisse potenti. Sed maximus
        placerat urna, sit amet pharetra nisl commodo et. Curabitur varius est
        eu mi ornare dapibus. Nunc dignissim, urna sed commodo egestas, ante
        erat blandit lacus, sit amet sagittis massa justo facilisis orci. Donec
        in quam velit. Fusce varius nibh nec lorem egestas, id tempus lectus
        porta. Maecenas lectus leo, efficitur non quam in, gravida vehicula
        risus. Nullam aliquet, purus ac elementum facilisis, est sapien semper
        sem, sit amet imperdiet ligula velit id magna. Aenean accumsan nunc at
        purus pretium, vel lobortis turpis cursus. Nam bibendum rhoncus risus
        vitae{" "}
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

export default PseudoText;
