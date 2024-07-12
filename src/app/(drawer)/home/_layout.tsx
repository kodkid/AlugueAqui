import React from 'react';
import { Stack, } from "expo-router";
import { SQLiteProvider, SQLiteProviderProps } from "expo-sqlite";

export default function Layout() {
    return (

        <Stack>
            <Stack.Screen name="index" options={{ title: "Home", }} />
            <Stack.Screen name="cardRegister" options={{ title: "Cadastrar cartão", }} />
            <Stack.Screen name="pay" options={{ title: "Tela de pagamento", }} />
            <Stack.Screen name="shopItemLayout" options={{ title: "Tela de informação do produto", }} />
        </Stack>

    );
}