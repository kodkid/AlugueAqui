import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import ComponentTitle2 from '../components/ComponentTitle2';

const Boleto = require('../../assets/images/boleto.png')
const Cartao = require('../../assets/images/cartao.png')
const Qrcode = require('../../assets/images/qrcode.png')
const Pix = require('../../assets/images/pix.png')

export default function () {

    <View style={styles.container}>
        <View style={styles.containerText}>
            <ComponentTitle2 title='Selecione o método de pagamento' />
        </View>
        <View style={styles.containerImage}>
            <Image source={Boleto} style={styles.image}/>
            <Image source={Cartao} style={styles.image}/>
            <Image source={Qrcode} style={styles.image}/>
            <Image source={Pix} style={styles.image}/>
            </View>
            </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    containerText: {

    },
    containerImage: {
        justifyContent: "space-between",

    },
    image: {
        height: 100,
        width: 100,

    }

})