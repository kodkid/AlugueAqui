import { Drawer } from "expo-router/drawer"

export default function TabLayout() {
    return (
        <Drawer screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="index"
                options={{ title: "Carrinho de compras" }} />
            <Drawer.Screen name="acompanhamento"
                options={{ title: "Acompanhamento" }} />
                <Drawer.Screen name="Configuracoes"
                options={{ title: "configuracoes" }} />     

        </Drawer>
    )
}