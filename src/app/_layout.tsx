import React from 'react';
import { Stack , Slot } from "expo-router";
import { SQLiteProvider, } from "expo-sqlite";
import { startDb } from './database/startDb';

export default function Layout() {
    return (
        <SQLiteProvider databaseName='alugueaqui.db'>
            <Stack>
            <Stack.Screen name="/index" options={{ title: "", }} />
            <Stack.Screen name="/login" options={{ title: "Cadastrar cartão", }} />
            <Stack.Screen name="/recovery" options={{ title: "Tela de pagamento", }} />
            <Stack.Screen name="/register" options={{ title: "Tela de pagamento", }} />
            <Stack.Screen name="home/index" options={{ title: "Tela de pagamento", }} />
            </Stack>   
        </SQLiteProvider>


    );
}