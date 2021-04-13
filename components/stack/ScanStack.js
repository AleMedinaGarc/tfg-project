import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native" 
import ProductScreen from "../../screens/ProductScreen"
import ScanScreen from "../../screens/ScanScreen"
import ScanScreenWeb from "../../screens/ScanScreenWeb"


const Stack = createStackNavigator();

export default function ScanStack() {
    return (
            <Stack.Navigator
                initialRouteName="Scanner"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#9ad1d4",
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign: "center",
                }}
            >
                <Stack.Screen
                    name="Scanner"
                    component={(Platform.OS == "android") ? ScanScreen : ScanScreenWeb}
                    options={{
                        title: "Escaner"        ,
                    }}
                />
                <Stack.Screen
                    name="ProductScreen"
                    component={ProductScreen}
                    options={{
                        title: "Producto"
                    }}
                />
            </Stack.Navigator>
  
    );
}
