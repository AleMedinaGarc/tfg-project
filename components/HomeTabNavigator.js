import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeContent from "./HomeContent"
import { HistoryScreen } from "../screens/HistoryScreen"
import { ScanScreen } from "../screens/ScanScreen"


const Tab = createMaterialBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: "#9ad1d4" }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName = "home";
                    if (route.name === "Home") {
                    }
                    else if (route.name === "Scanner") {
                        iconName = "barcode-outline";
                    } else if (route.name === "History") {
                        iconName = "list";
                    }

                    return <Ionicons name={iconName} size={20} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Scanner"
                component={ScanScreen}
                options={{
                    title: "Escaner"
                }} />
            <Tab.Screen
                name="Home"
                component={HomeContent}
                options={{
                    title: "Inicio"
                }} />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    title: "Historial"
                }} />
        </Tab.Navigator>
    )
}
