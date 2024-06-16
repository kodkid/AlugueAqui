import * as React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Logo = require('../../assets/images/logo.png');



export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Image source={Logo} style={styles.logo}></Image>
        <View style={styles.containerInput}>
        <TextInput label="E-mail" mode="outlined" />
        <TextInput label="Senha" mode="outlined"  />
        </View>
        <Button
        style={styles.botao}
        icon="login"
        mode="elevated"
        buttonColor="#6a4fa8"
        textColor="#fff"
        onPress={() => alert("Botão de login pressionado")}
      >
        Login
      </Button>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",


  },
  login: {
    flex: 1/3,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  containerInput: {
  
  },
   botao: {
  
    marginTop: 16,
  },

});
