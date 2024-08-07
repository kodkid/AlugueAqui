import React from "react";
import { Stack } from "expo-router";
import { SQLiteProvider, SQLiteProviderProps } from "expo-sqlite";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="pay"
        options={{ title: "Tela de pagamento", headerShown: true }}
      />
      <Stack.Screen
        name="boleto"
        options={{ title: "Boleto", headerShown: true }}
      />
      <Stack.Screen
        name="cardRegister"
        options={{ title: "Cadastrar cartão", headerShown: true }}
      />
       <Stack.Screen
        name="qrcode"
        options={{ title: "QR Code", headerShown: true }}
      />
       <Stack.Screen
        name="pix"
        options={{ title: "Pix", headerShown: true }}
      />
      <Stack.Screen
        name="layoutProduto"
        options={{ title: "Produto", headerShown: true }}
      />
    </Stack>
  );
}
