import React from 'react';
import { Stack, } from "expo-router";
import { SQLiteProvider, SQLiteProviderProps } from "expo-sqlite";

export default function Layout() {
    return (

        <Stack>
            <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Stack.Screen name="cardRegister" options={{ title: "Cadastrar cartão", headerShown: true}} />
            <Stack.Screen name="pay" options={{ title: "Tela de pagamento", headerShown: true }} />
            <Stack.Screen name="shopItemLayout" options={{ title: "Tela de informação do produto",  headerShown: true}} />
        </Stack>

    );
}