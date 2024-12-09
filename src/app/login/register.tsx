import { useState , useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";
import ComponentTextInput from "../../components/ComponentTextInput";
import ComponentTitle from "../../components/ComponentTitle";
import ComponentTextInputPassword from "../../components/ComponentTextInputPassword";

import { useUserDatabase, userDataBase } from "@/database/useUserDataBase";

export default function Register({}) {
  const [id, setId] = useState("");
  const [seach, setSeach] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user , setUser] = useState("");
  const userDataBase = useUserDatabase();

  async function create() {
    try {
      const response = userDataBase.create({ name, password, email });
      Alert.alert(
        "Usuario Cadastrado com sucesso com o ID:" +
          (await response).insertedRowId
      );
    } catch (error) {
      console.log(error);
    }
  }
  async function list() {
    try {
      const response = await userDataBase.searchByName(seach)
    } catch(error) {
      console.log("error")
    }
  }
  function Registrar() {
    router.push("/login");
  }
  useEffect
  return (
    <View style={styles.container}>
      <View style={styles.registerPanel}>
        <ComponentTitle title="Digite seu nome completo" />
        <ComponentTextInput value="nome" onChangeText={setName} placeholder="Nome completo" />
        <ComponentTitle title="Digite seu e-mail " />
        <ComponentTextInput value="e-mail" onChangeText={setEmail}  placeholder="e-mail" />
        <ComponentTitle  title="Digite sua senha " />
        <ComponentTextInputPassword value="password" onChangeText={setPassword} placeholder="Senha" />

        <Button
          style={styles.buttom}
          mode="elevated"
          buttonColor="#FFB800"
          textColor="#fff"
          onPress={create}
        >
          Cadastrar
        </Button>
        <View>
          <Text style={styles.textPanel}>
            {" "}
            Já possui uma conta?{" "}
            <Text style={styles.link2} onPress={() => router.push("/login")}>
              {" "}
              Logar
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },

  registerPanel: {
    flex: 1,
    marginTop: 16,
    gap: 6,
    paddingHorizontal: 16,
  },

  containerImage: {
    alignItems: "center",
  },

  containerInput: {
    flex: 1,
  },

  link1: {
    color: "#000",
    alignSelf: "flex-start",
  },

  buttom: {
    marginTop: 8,
  },

  link2: {
    color: "#ffbd59",
  },
  textPanel: {
    alignSelf: "flex-start",
    padding: 4,
  },
});
