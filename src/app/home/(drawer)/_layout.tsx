import { Drawer } from "expo-router/drawer"


export default function TabLayout() {
    return (
        <Drawer screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="index"
                options={{
                    drawerLabel: "Carrinho de compra",
                    title: "Carrinho de compras"
                }} />
            <Drawer.Screen name="acompanhamento"
                options={{
                    drawerLabel: "acompanhamento",
                    title: "acompanhamento"
                }} />
            <Drawer.Screen name="configuracoes"
                options={{
                    drawerLabel: "configuracoes",
                    title: "configuracoes"
                }} />


        </Drawer>
    )
}