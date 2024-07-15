import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import ComponentCardShop from '../../../components/ComponentCardShop';
import { router } from 'expo-router';

const ShopItem1 = require("../../../../assets/icon.png");

const windowWidth = Dimensions.get('window').width;

export default function ShopItemLayout() {
    return (
        <View style={styles.container}>
            <Drawer.Screen
                options={{
                    headerShown: true,
                    headerLeft: () => <DrawerToggleButton />,
                }}
            />
            <View style={styles.containerImage}>
                <Image style={styles.shopItem} source={ShopItem1} />
                <View style={styles.navigationLeft}>
                    <TouchableOpacity onPress={() => {/* Função para navegar para a imagem anterior */}}>
                        <AntDesign name="left" size={24} color="#A4A4A4" />
                    </TouchableOpacity>
                </View>
                <View style={styles.navigationRight}>
                    <TouchableOpacity onPress={() => {/* Função para navegar para a próxima imagem */}}>
                        <AntDesign name="right" size={24} color="#A4A4A4" />
                    </TouchableOpacity>
                </View>
            </View>
            <ComponentCardShop />
            <Button
            icon="login"
            mode="elevated"
            buttonColor="#FFB800"
            textColor="#fff"
            onPress={() => router.push("home/pay")}
          >
            Login
          </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    containerImage: {
        marginTop: 16, // Espaço acima da imagem
        alignItems: 'center',
    },
    shopItem: {
        height: 200, 
        width: 200, 
        resizeMode: "contain", // Ajuste o modo de redimensionamento conforme necessário
    },
    navigationLeft: {
        position: 'absolute',
        left: 16,
        top: 16,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Para garantir que fique sobre a imagem
        marginTop: 64,
    },
    navigationRight: {
        position: 'absolute',
        right: 16,
        top: 16,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Para garantir que fique sobre a imagem
        marginTop: 64,
    },
})