import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";


//https://medium.com/@dinukadilshanfernando/implementing-a-barcode-scanner-by-using-react-native-camera-b170de4b7f51
export default function App() {
  return (
    <NavigationContainer>
    <HomeScreen></HomeScreen>
    </NavigationContainer>
  );
}
