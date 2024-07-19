import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Avatar,
  Card,
  Text,
  IconButton,
  MD3Colors,
  Button,
} from "react-native-paper";
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
      <View style={styles.header}>
        <Text style={styles.title} variant="titleLarge">Nome do item</Text>
        <IconButton
          icon="heart"
          iconColor={MD3Colors.error50}
          size={30}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <Text style={styles.construction} variant="bodyMedium">Construção</Text>
      <View style={styles.rating}>
        <AirbnbRating
          size={15}
          defaultRating={1}
          showRating={false}
          selectedColor="#FFB800"
        />
      </View>
      <Text style={styles.price} variant="bodyMedium">
        $450,00 <Text variant="bodySmall">à vista</Text>
      </Text>
      <Text variant="bodySmall">10x de R$ 250</Text>
      <Text variant="bodySmall">sem juros</Text>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.buttom1}
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#000"
          onPress={() => Alert.alert("Botão1 pressionado")}
        >
          Alugar
        </Button>
        <Button
          style={styles.buttom2}
          mode="outlined"
          buttonColor="#fff"
          textColor="#FFB800"
          onPress={() => Alert.alert("Botão2 pressionado")}
        >
          Adicionar a sacola
        </Button>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Alinha os itens nas extremidades
    alignItems: "center", // Alinha verticalmente
    marginBottom: 4, // Ajustado para diminuir o espaçamento
    height: 25,
  },
  title: {
    fontWeight: "bold",
  },
  construction: {
    marginBottom: 4, // Ajustado para reduzir o espaçamento abaixo do título
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 4, // Reduzido para diminuir o espaço abaixo da avaliação
  },
  buttonsContainer: {
    marginTop: 32,
    alignItems: "center",
    width: "100%", // Faz os botões ocuparem a largura total do contêiner
  },
  buttom1: {
    marginTop: 8,
    width: "90%",
  },
  buttom2: {
    marginTop: 8,
    width: "90%",
    borderColor: "#FFB800",
  },
});

export default ComponentCardBoxShop2;