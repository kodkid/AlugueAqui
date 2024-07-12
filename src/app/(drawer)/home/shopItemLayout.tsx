import React from 'react';
import { Image, View, Text, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer"

const ShopItem1 = require('../../../../assets/images/shop-item-1.png')



export default function shopItemLayout() {
    return (
        <View style={styles.container}>
            <Drawer.Screen options={{
                headerShown: true,
                headerLeft: () => <DrawerToggleButton />,
            }} />
            <View style={styles.containerImage}></View>
            <Image source={ShopItem1} ></Image>
        </View>

    )


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    containerImage: {
        height: "15%",
        width: "auto",
        alignItems: "center",

    },
    shopItem: {
        height: "15%",
        width: "auto",

    }
})