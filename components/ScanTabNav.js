import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from 'react-native'

import ScanContent from "./HomeContent"
import { HistoryScreen } from "../screens/HistoryScreen"
import ScanScreenWeb from "./ScanContentWeb"


const Tab = createMaterialBottomTabNavigator();

export function ScanTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Scanner"
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
                component={(Platform.OS == "android") ? ScanContent : ScanScreenWeb}
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
