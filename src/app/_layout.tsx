import React from 'react';
import { Stack , Slot } from "expo-router";
import { SQLiteProvider, } from "expo-sqlite";
import { startDb } from './database/startDb';

export default function Layout() {
    return (
        <SQLiteProvider databaseName='alugueaqui.db' onInit={startDb}>
            <Stack>
            <Stack.Screen name="index" options={{ title: "Bem vIndo", headerShown: false }} />
            <Stack.Screen name="login" options={{ title: "Bem vIndo", headerShown: false  }} />
            <Stack.Screen name="(drawer)" options={{ title: "Bem vIndo", headerShown: false  }} />
            </Stack>   
        </SQLiteProvider>


    );
}