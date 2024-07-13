import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text,  } from 'react-native-paper';


const Icon = require("../../assets/icon.png");

//  <Divider style={styles.divider} />
interface LeftContentProps {
  size?: number;
  style?: object;
}

const LeftContent: React.FC<LeftContentProps> = (props) => <Avatar.Icon {...props} icon="folder" />;

const ComponentCardBoxShop: React.FC = () => (
  <Card mode='contained' style={styles.container}>
    <View style={styles.cardContent}>
      <View style={styles.leftContent}>
        <Card.Cover source={Icon} style={styles.cover} />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.title} variant="displaySmall">Nome do item</Text>
        <Text style={styles.price}variant="bodyMedium">R$ 0,00</Text>
        <Text style={styles.time} variant='bodySmall'>por dia</Text>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EC',
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
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  price: {
    fontSize: 16,
    color: "#313131",
  },
  time: {
    fontSize: 14,
    color: "#665E66",
  }
});

export default ComponentCardBoxShop;