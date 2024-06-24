import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, } from 'react-native-paper';

import ComponentTextInput from '../components/ComponentTextInput';

const Logo = require('../../assets/images/logo.png');



export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginPanel}>
        <View style={styles.containerImage}>
          <Image source={Logo} style={styles.logo}></Image>
        </View>
        {/* fim do ContainerImage */}
        <View style={styles.containerInput}>
          <ComponentTextInput placeholder='Login' />
          <ComponentTextInput placeholder='Senha' />

          <Text style={styles.link1}
            onPress={() => navigation.navigate("Recovery")}> Esqueci a Senha</Text>
          <Button
            style={styles.buttom}
            icon="login"
            mode="elevated"
            buttonColor="#008080"
            textColor="#fff"
            onPress={() => navigation.navigate("Home")}
          >
            Login
          </Button>
          <Text style={styles.text}> Não tem conta? <Text style={styles.link2}
            onPress={() => navigation.navigate("Register")}> Criar Conta</Text></Text>

        </View>
        {/* fim do ContainerImage */}
      </View>
      {/* fim do Login */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'column',
    justifyContent: "center",

  },

  loginPanel: {
    flex: 1,
    marginTop: 16,
    gap: 10,
    paddingHorizontal: 16,

  },

  containerImage: {
    alignItems: "center",

  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: "center"

  },

  containerInput: {
    flex: 1,
    gap: 6,


  },

  link1: {
    color: "#069e6e",
    alignSelf: "flex-end",

  },

  buttom: {
    marginTop: 16,

  },

  text: {
    fontSize: 15,

  },

  link2: {
    color: "#069e6e",

  },

});
