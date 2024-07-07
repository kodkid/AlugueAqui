import  React from 'react';
import { Card } from 'react-native-paper';

const ImageItem1 = require("../../assets/images/shop-item-1.png")

const ComponentCardItem = () => (
  <Card>
    <Card.Cover source={ImageItem1} />
  </Card>
);

export default ComponentCardItem;