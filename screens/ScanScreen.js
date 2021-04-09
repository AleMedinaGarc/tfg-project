import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ScanTabNav } from "../components/ScanTabNav";



const Stack = createStackNavigator();


export default function HomeScreen() {
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
                    component={ScanTabNav}
                    options={{
                        title: "Escaner",
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
