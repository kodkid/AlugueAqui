import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Carrinho(){
    return(
        <View style={styles.container}>
            <Text> Tela de carrinho</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
    }
})