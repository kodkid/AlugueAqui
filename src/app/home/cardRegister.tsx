import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { router, Link } from 'expo-router';
import { Button } from "react-native-paper";
import ComponentTitle from "../../components/ComponentTitle"
import ComponentTextInput from "../../components/ComponentTextInput";

export default function CardRegister({ }) {
    return (
        <View style={styles.container}>
            <View style={styles.registerPanel}>
                <ComponentTitle title="Número Do Cartão" />
                <ComponentTextInput placeholder="Número do Cartão" />

                <View style={styles.inlineContainer}>
                    <View style={styles.inlineInput}>
                        <ComponentTitle title="Validade" />
                        <ComponentTextInput style={styles.smallInput} placeholder="MM/AA" />
                    </View>
                    <View style={styles.inlineInput}>
                        <ComponentTitle title="CVC" />
                        <ComponentTextInput style={styles.smallInput} placeholder="CVC" />
                    </View>
                </View>

                <ComponentTitle title="Titular do cartão" />
                <ComponentTextInput placeholder="Titular do cartão" />
                <ComponentTitle title="CPF do titular" />
                <ComponentTextInput placeholder="CPF do titular" />


                <Button
                    style={styles.button}
                    icon="registered-trademark"
                    mode="elevated"
                    buttonColor="#FFB800"
                    textColor="#fff"
                    onPress={() => router.push("/")}
                >
                    Registrar
                </Button>

                <View style={styles.textPanel}>
                    <Text>
                        <Link href="/home" style={styles.link}>
                            Voltar
                        </Link>
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
        color: "##FFB800",
    },
});