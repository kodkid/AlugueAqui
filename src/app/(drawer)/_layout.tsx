import { DrawerToggleButton } from "@react-navigation/drawer"
import { Drawer } from "expo-router/drawer"
import { MaterialIcons , Ionicons , FontAwesome6 } from '@expo/vector-icons';


export default function TabLayout() {
    return (
        <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 0, }}>
            <Drawer.Screen name="home"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
                }} />
            <Drawer.Screen name="acompanhamento"
                options={{
                    drawerLabel: "Acompanhamento",
                    title: "Acompanhamento",
                    drawerIcon: ({ size, color }) => <FontAwesome6 name="truck-front" size={size} color={color} />,
                }} />
            <Drawer.Screen name="index"
                options={{
                    drawerLabel: "Carrinho de compra",
                    title: "Carrinho de compras",
                    drawerIcon: ({ size, color }) => <MaterialIcons name="shopping-cart" size={size} color={color} />,
                }} />
            <Drawer.Screen name="configuracoes"
                options={{
                    drawerLabel: "Configuraçôes",
                    title: "Configuraçôes",
                    drawerIcon: ({ size, color }) => <Ionicons name="settings-sharp" size={size} color={color} />,
                }} />
            <Drawer.Screen name="logout"
                options={{
                    drawerLabel: "Sair",
                    title: "Sair",
                    headerLeft: () => <DrawerToggleButton />,
                    drawerIcon: ({ size, color }) => <MaterialIcons name="exit-to-app" size={size} color={color} />,
                }} />


        </Drawer>
    )
}