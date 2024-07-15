import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { Avatar, Card, Text, Icon, MD3Colors } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';

//    <Text style={styles.title} variant="displaySmall">Nome do item</Text>



const ComponentIcon = require("../../assets/icon.png");

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
        <Card.Cover source={ComponentIcon} style={styles.cover} />
      </View>
      <View style={styles.rightContent}>
        <Link style={styles.title} href={"home/shopItemLayout"}> Nome do item</Link>
        <Text style={styles.price} variant="bodyMedium">R$ 0,00</Text>
        <Text style={styles.time} variant='bodySmall'>por dia</Text>
        <Card.Actions style={styles.actions}>
          <View style={styles.rating}>
          <AirbnbRating
            size={15}
            defaultRating={1}
            showRating={false}
            selectedColor='#FFB800' />
          </View>
          <View style={styles.icon}>
            <Icon
              source="heart"
              color={MD3Colors.error50}
              size={30}
            />
          </View>
        </Card.Actions>
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
  },
  actions: {
    gap: 90,
    margin: 4,
    marginBottom: 4

  },
  rating: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }
});

export default ComponentCardBoxShop;