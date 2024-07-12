import { DrawerToggleButton } from "@react-navigation/drawer"
import { Drawer } from "expo-router/drawer"


export default function TabLayout() {
    return (
        <Drawer screenOptions={{ headerShown: false}}>
            <Drawer.Screen name="Carrinho"
                options={{
                    drawerLabel: "Carrinho de compra",
                    title: "Carrinho de compras",
                   
                }} />
            <Drawer.Screen name="acompanhamento"
                options={{
                    drawerLabel: "acompanhamento",
                    title: "acompanhamento",
                   

                }} />
            <Drawer.Screen name="configuracoes"
                options={{
                    drawerLabel: "configuracoes",
                    title: "configuracoes",
                    headerLeft: () => <DrawerToggleButton />
                }} />


        </Drawer>
    )
}