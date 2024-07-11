import React from 'react';
import { Stack , Slot } from "expo-router";
import { SQLiteProvider, } from "expo-sqlite";
import { startDb } from './database/startDb';

export default function Layout() {
    return (
        <SQLiteProvider databaseName='alugueaqui.db' onInit={startDb}>
            <Stack>
            <Stack.Screen name="/index" options={{ title: "Bem vIndo", }} />
            <Stack.Screen name="/login" options={{ title: "Cadastrar cartão", }} />
            <Stack.Screen name="/recovery" options={{ title: "Tela de recuperação", }} />
            <Stack.Screen name="/register" options={{ title: "Tela de registro", }} />
            <Stack.Screen name="home/index" options={{ title: "Tela de pagamento", }} />
            <Stack.Screen name="home/cardRegister" options={{ title: "Cadastrar cartão", }} />
            <Stack.Screen name="home/pay" options={{ title: "Tela de pagamento", }} />
            <Stack.Screen name="home/shopItemLayout" options={{ title: "Tela de informação do produto", }} />
            </Stack>   
        </SQLiteProvider>


    );
}