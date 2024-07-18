import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Text, IconButton, MD3Colors, Button } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";

interface LeftContentProps {
  size?: number;
  style?: object;
}

const LeftContent: React.FC<LeftContentProps> = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

const ComponentCardBoxShop2: React.FC = () => (
  <Card mode="contained" style={styles.container}>
    <View style={styles.cardContent}>
      <Text variant="titleLarge">Nome do item</Text>
      <Text variant="bodyMedium">Construção</Text>
      <View style={styles.rating}>
      <AirbnbRating
        size={15}
        defaultRating={1}
        showRating={false}
        selectedColor="#FFB800"
      />
      </View>
      <IconButton
        icon="heart"
        iconColor={MD3Colors.error50}
        size={40}
        onPress={() => console.log("Pressed")}
      />
      <Text variant="bodyMedium">
        $0,00 <Text variant="bodySmall">à vista</Text>
      </Text>
      <Text variant="bodySmall">10x de R$ 250</Text>
      <Text variant="bodySmall">sem juros</Text>
      <View style={styles.buttonsContainer}>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rating: {
    justifyContent: "flex-start",
    alignItems: "flex-start",

  },
  buttonsContainer: {
    marginTop: 16,
    alignItems: "center",
    width: "100%", // Faz os botões ocuparem a largura total do contêiner
  },
  button: {
    marginTop: 8,
    width: "80%", // Ajuste a largura conforme necessário
  },
});

export default ComponentCardBoxShop2;