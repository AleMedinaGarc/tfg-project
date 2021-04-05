import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"

import { HomeScreen } from "./screens/HomeScreen"
import { ScanScreen } from "./screens/ScanScreen"
import { HistoryScreen } from "./screens/HistoryScreen"

// https://betterprogramming.pub/react-navigation-5-stack-tab-drawer-all-in-one-ead723188056

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  let dataFile = require("./config.json");

  const setInitalData = async () => {
    try {
      let value = await AsyncStorage.getItem("hasLaunched");
      if (value == null) {
        await AsyncStorage.setItem("myData", JSON.stringify(dataFile));
        await AsyncStorage.setItem("hasLaunched", "yeah");
      }
      //await AsyncStorage.clear()
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    setInitalData();
  }, []);

  return (
    <NavigationContainer>
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
          component={HomeScreen}
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
    </NavigationContainer>
  );
}
