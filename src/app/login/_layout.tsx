import React from "react";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { startDb } from "../database/startDb";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="alugueaqui.db" onInit={startDb}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "bem vindo", headerShown: true }}
        />
        <Stack.Screen
          name="recovery"
          options={{ title: "Tela de recuperação", headerShown: true }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Tela de registro", headerShown: true }}
        />
      </Stack>
    </SQLiteProvider>
  );
}
