import * as React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TextInput, Card } from 'react-native-paper';

const Logo = require('../../assets/images/logo.png');



export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.logo}></Image>
        <View style={styles.input}>
          <TextInput label="E-mail" mode="outlined" />
          <TextInput label="Senha" mode="outlined" />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center'


  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    justifyContent: 'center',

  }

});
