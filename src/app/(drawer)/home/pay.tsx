import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerToggleButton } from '@react-navigation/drawer';

import ComponentTitle1 from '../../../components/ComponentTitle4';
import ComponentTitle3 from '../../../components/ComponentTitle3';

const Boleto = require('../../../../assets/images/boleto.png');
const Cartao = require('../../../../assets/images/cartao.png');
const Qrcode = require('../../../../assets/images/qrcode.png');
const Pix = require('../../../../assets/images/pix.png');

export default function () {
    return (
        <View style={styles.container}>
            <Drawer.Screen
                options={{
                    headerShown: true,
                    headerLeft: () => <DrawerToggleButton />,
                }}
            />
            <View style={styles.containerText}>
                <ComponentTitle1 title="Selecione o método de " />
                <ComponentTitle1 title="pagamento" />
            </View>
            {/* Fim do containerText */}
            <View style={styles.containerImage}>
                <View style={styles.cardImage}>
                    <View style={styles.boximage}>
                        <Image source={Boleto} style={styles.image} resizeMode="contain" />
                        <ComponentTitle3 title='Boleto'/>
                    </View>
                </View>
                <View style={styles.cardImage}>
                    <View style={styles.boximage}>
                        <Image source={Cartao} style={styles.image} resizeMode="contain" />
                        <ComponentTitle3 title='Cartão'/>
                    </View>
                </View>
                <View style={styles.cardImage}>
                    <View style={styles.boximage}>
                        <Image source={Qrcode} style={styles.image} resizeMode="contain" />
                        <ComponentTitle3 title='QR Code'/>
                    </View>
                </View>
                <View style={styles.cardImage}>
                    <View style={styles.boximage}>
                        <Image source={Pix} style={styles.image} resizeMode="contain" />
                        <ComponentTitle3 title='Pix'/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    containerText: {
        marginTop: 24, // Espaço acima do título
        alignItems: 'center',
    },
    containerImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardImage: {
        marginVertical: 16,
        width: '45%',
    },
    boximage: {
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#FFB800',
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    image: {
        height: 100,
        width: 100,
    },
});