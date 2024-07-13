import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer"

import ComponentSeachBar from "../../components/ComponentSeachBar"

export default function Carrinho() {
    return (
        <View style={styles.container}>
            <Drawer.Screen options={{
                headerShown: true,
                headerLeft: () => <DrawerToggleButton />,
                headerRight: () => <ComponentSeachBar />,
             }} />
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