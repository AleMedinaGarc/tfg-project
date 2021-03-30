import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from "./components/HomeScreen"
import { ScanScreen } from "./components/ScanScreen"
import { HistoryScreen } from "./components/HistoryScreen"

// https://www.passbolt.com/
// https://betterprogramming.pub/react-navigation-5-stack-tab-drawer-all-in-one-ead723188056

const Tab = createMaterialBottomTabNavigator();
let data = require('./config.json');


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#9ad1d4' }}
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

            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Scanner"
          component={ScanScreen}
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
