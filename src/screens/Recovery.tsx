import * as React from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { TextInput, Button, } from 'react-native-paper';

import ComponentTextInput from '../components/ComponentTextInput';


export default function Recovery({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Recuperação de conta</Text>
            <ComponentTextInput placeholder='Email da conta a se recuperar'/>
           
            <Button
                style={styles.buttom}
                icon="login"
                mode="elevated"
                buttonColor="#008080"
                textColor="#fff"
                onPress={() => {
                    Alert.alert(
                        'Alerta',
                        'Tem certeza que deseja enviar o email?',
                        [
                            { text: 'Cancelar', onPress: () => console.log('Cancel Pressed') },
                            { text: 'Confirmar', onPress: () => navigation.navigate('Login') }
                        ],
                        { cancelable: false }
                    );
                }}
            >
                Enviar
            </Button>
            <Text style={styles.link1} onPress={() => navigation.navigate("Login")}> Voltar</Text>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginHorizontal: 16,
        justifyContent: "center",
        gap: 2,
    },

    link1: {
        color: "#000",
        alignSelf: 'flex-start',

    },

    buttom: {
        marginTop: 16


    },

    text: {
        fontSize: 15,
        color: "#008080",

    },

});
