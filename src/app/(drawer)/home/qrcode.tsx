import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Qrcode() {
    return (
        <View style={styles.container}>
            <Text> Pagar com qrcode</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
})