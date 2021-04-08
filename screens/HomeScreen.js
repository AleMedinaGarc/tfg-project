import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { createStackNavigator } from "@react-navigation/stack";

import { TabNavigator } from "../components/HomeTabNavigator";
import { HelpScreen } from "./HelpScreen"
import { ConfigScreen } from "./ConfigScreen"


const Stack = createStackNavigator();


export default function HomeScreen() {
    let dataFile = require("../config.json");

    const setInitalData = async () => {
        try {
            let value = await AsyncStorage.getItem("hasLaunched");
            if (value == null) {
                await AsyncStorage.setItem("myData", JSON.stringify(dataFile));
                await AsyncStorage.setItem("hasLaunched", "yeah");
            }
            //await AsyncStorage.clear() // No descometar
        } catch (e) {
            alert(e);
        }
    }

    useEffect(() => {
        setInitalData();
    }, []);

    return (

            <Stack.Navigator
                initialRouteName="Menu"
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
                    name="Menu"
                    component={TabNavigator}
                    options={{
                        title: "Inicio",
                    }}
                />
                <Stack.Screen
                    name="ConfigScreen"
                    component={ConfigScreen}
                    options={{
                        title: "Configuración"
                    }}
                />
                <Stack.Screen
                    name="HelpScreen"
                    component={HelpScreen}
                    options={{
                        title: "Ayuda"
                    }}
                />
            </Stack.Navigator>
  
    );
}
