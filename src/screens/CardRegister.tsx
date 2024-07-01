import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import ComponentTextInput from "../components/ComponentTextInput";
import ComponentTextTitle from "../components/ComponentText";


export default function CardRegister({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.registerPanel}>
                <ComponentTextTitle title="Número Do Cartão" />
                <ComponentTextInput placeholder="Número do Cartão" />

                <View style={styles.inlineContainer}>
                    <View style={styles.inlineInput}>
                        <ComponentTextTitle title="Validade" />
                        <ComponentTextInput style={styles.smallInput} placeholder="MM/AA" />
                    </View>
                    <View style={styles.inlineInput}>
                        <ComponentTextTitle title="CVC" />
                        <ComponentTextInput style={styles.smallInput} placeholder="CVC" />
                    </View>
                </View>

                <ComponentTextTitle title="Titular do cartão" />
                <ComponentTextInput placeholder="Titular do cartão" />
                <ComponentTextTitle title="CPF do titular" />
                <ComponentTextInput placeholder="CPF do titular" />

                <Button
                    style={styles.button}
                    icon="login"
                    mode="elevated"

                    buttonColor="#ffbd59"

                    textColor="#fff"
                    onPress={() => navigation.navigate("Home")}
                >
                    Registrar
                </Button>
                <View style={styles.textPanel}>
                    <Text>
                        Já possui uma conta?{" "}
                        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
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
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    registerPanel: {
        marginTop: 16,
    },
    inlineContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    inlineInput: {
        flex: 1,
        marginRight: 10,
    },
    smallInput: {
        width: "100%",
    },
    button: {
        marginTop: 16,
    },
    textPanel: {
        alignSelf: "flex-start",
        marginTop: 16,
    },
    link: {
        color: "#fbd796",
    },
});