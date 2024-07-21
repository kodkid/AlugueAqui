import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

const ComponentIcon = require("../../assets/icon.png");

interface LeftContentProps {
  size?: number;
  style?: object;
}

const LeftContent: React.FC<LeftContentProps> = (props) => (
  <Avatar.Icon {...props} icon="folder" />
);

const ComponentCardBoxShop: React.FC = () => {
  // Estado para o contador
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o contador
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card mode="contained" style={styles.container}>
      <View style={styles.cardContent}>
        <View style={styles.leftContent}>
          <Card.Cover source={ComponentIcon} style={styles.cover} />
        </View>

        <View style={styles.rightContent}>
          <Card.Content>
            <Text style={styles.title}>Nome do item</Text>
            <View style={styles.textTop}>
              <Text style={styles.price} variant="bodyMedium">
                R$ 0,00
              </Text>
              <Text style={styles.time} variant="bodySmall">
                por dia
              </Text>
            </View>
          </Card.Content>
          <View style={styles.counterWrapper}>
            <View style={styles.counterContainer}>
              <FontAwesome
                name="minus-square"
                size={30}
                color="#FFB800"
                onPress={decrement}
              />
              <View style={styles.counterTextContainer}>
                <Text style={styles.counterText}>{count}</Text>
              </View>
              <FontAwesome
                name="plus-square"
                size={30}
                color="#FFB800"
                onPress={increment}
              />
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 4,
    borderEndWidth: 4,
    borderEndColor: "#A4A4A4",
    borderBottomWidth: 2,
    borderBottomColor: "#A4A4A4",
  },
  cardContent: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftContent: {
    width: 60,
  },
  cover: {
    width: "100%",
    height: 90,
    resizeMode: "cover",
  },
  rightContent: {
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  textTop: {
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#313131",
  },
  time: {
    fontSize: 12,
    color: "#665E66",
  },
  counterWrapper: {
    position: "absolute",
    bottom: 0, // Alinha o contêiner ao fundo do card
    right: 0,
    width: "100%", // Garante que o contêiner ocupe toda a largura disponível
    paddingHorizontal: 6, // Adiciona espaçamento nas laterais
    paddingBottom: 4, // Ajusta o espaçamento inferior para garantir que os botões estejam alinhados com a borda do card
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Garante que os botões fiquem alinhados à direita
  },
  counterTextContainer: {
    width: 25,
    height: 25,
    backgroundColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  counterText: {
    fontSize: 16,
    color: "#FFF",
  },
});

export default ComponentCardBoxShop;
