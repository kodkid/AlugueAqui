import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import ComponentTitle2 from '../../components/ComponentTitle2';
import ComponentTitle from '../../components/ComponentTitle';

const Boleto = require('../../../assets/images/boleto.png')
const Cartao = require('../../../assets/images/cartao.png')
const Qrcode = require('../../../assets/images/qrcode.png')
const Pix = require('../../../assets/images/pix.png')
export default function () {
    return(
    <View style={styles.container}>
        <View style={styles.containerText}>
            <ComponentTitle2 title='Selecione o método de pagamento' />
        </View>
        {/* Fim do containerText*/ }
        <View style={styles.containerImage}>
            <View style={styles.cardImage}>
            <Image source={Boleto} style={styles.image}/>
            <ComponentTitle title='Boleto'/>
            <Image source={Cartao} style={styles.image}/>
            <ComponentTitle title='Boleto'/>
            </View>
            <View style={styles.cardImage}>
            <Image source={Qrcode} style={styles.image}/>
            <ComponentTitle title='Boleto'/>
            <Image source={Pix} style={styles.image}/>
            <ComponentTitle title='Boleto'/>
            </View>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    containerText: {


    },
    containerImage: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        alignItems: "center",


    },
    image: {
        height: 80,
        width: 80,
    },
    cardImage: {

    }

})