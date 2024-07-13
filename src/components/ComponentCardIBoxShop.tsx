import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text, Divider } from 'react-native-paper';

// Importe seu ícone ou imagem aqui
const Icon = require("../../assets/icon.png");

// Tipagem correta para os props do LeftContent
interface LeftContentProps {
  size?: number;
  style?: object;
}

const LeftContent: React.FC<LeftContentProps> = (props) => <Avatar.Icon {...props} icon="folder" />;

const ComponentCardBoxShop: React.FC = () => (
  <Card mode='outlined' style={styles.container}>
    <View style={styles.cardContent}>
      <View style={styles.leftContent}>
        <Card.Cover source={Icon} style={styles.cover} />
      </View>
      <View style={styles.rightContent}>
        <Text variant="titleLarge">Nome do item</Text>
        <Divider style={styles.divider} />
        <Text variant="bodyMedium">R$ 0,00</Text>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
  },
  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  leftContent: {
    marginRight: 16,
  },
  cover: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  rightContent: {
    flex: 1,
  },
  divider: {
    marginVertical: 8,
    height: 1,
    backgroundColor: 'black',
  },
});

export default ComponentCardBoxShop;