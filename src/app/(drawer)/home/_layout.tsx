import React from 'react';
import { Stack, } from "expo-router";
import { SQLiteProvider, SQLiteProviderProps } from "expo-sqlite";

export default function Layout() {
    return (

        <Stack>
            <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Stack.Screen name="pay" options={{ title: "Tela de pagamento", headerShown:false }} />
            <Stack.Screen name="boleto" options={{ title: "Pagar boleto", headerShown: false}} />
            <Stack.Screen name="cardRegister" options={{ title: "Cadastrar cartão", headerShown: false}} />
            <Stack.Screen name="layoutProduto" options={{ title: "Produto",  headerShown: true}} />
        </Stack>

    );
}