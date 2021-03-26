import * as React from 'react';
import { Provider as PaperProvider, Text, DefaultTheme } from 'react-native-paper';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from "./components/HomeScreen"
// import { ConfigScreen } from "./components/ConfigScreen"
// import { ScanScreen } from "./components/ScanScreen"
// import { HistoryScreen } from "./components/HistoryScreen"

// https://www.passbolt.com/
// https://betterprogramming.pub/react-navigation-5-stack-tab-drawer-all-in-one-ead723188056

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esto es el historial</Text>
    </View>
  );
}

function ScannerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esto es el escaner</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#eda5a5' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = "home";

            if (route.name === 'Home') {
            }
            else if (route.name === 'Scanner') {
              iconName = 'barcode-outline';   
            } else if (route.name === 'History') {
              iconName = 'list';
            }

            return <Ionicons name={iconName} size={20} color={color}/>;
          },
        })}
      >
        <Tab.Screen
          name="Scanner"
          component={ScannerScreen}
          options={{
            title: 'Escaner'
          }} />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio'
          }} />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: 'Historial'
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
