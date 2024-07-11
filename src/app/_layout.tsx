import React from 'react';
import { Stack } from "expo-router";
import { SQLiteProvider, SQLiteProviderProps } from "expo-sqlite";

export default function Layout() {
    return (

        <Stack>
            <Stack.Screen name="index" options={{ title: "Bem vindo", }} />
            <Stack.Screen name="login" options={{ title: "login", }} />
            <Stack.Screen name="register" options={{ title: "Registro", }} />
            <Stack.Screen name="recovery" options={{ title: "Recuperar conta", }} />
            <Stack.Screen name="home" options={{ title: "Loja", }} />
            <Stack.Screen name="cardRegister" options={{ title: "Cadastrar cartão", }} />
            <Stack.Screen name="/pay" options={{ title: "Tela de pagamento", }} />

        </Stack>

    );
}