import * as React from "react";
import { Card, Button,  } from "react-native-paper";

const ShopItem1 = require("../../assets/images/shop-item-1.png");

const ComponentCard = () => (
  <Card>
    <Card.Actions>
    <Card.Cover source={{}} />
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default ComponentCard;
