import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeStack from './stack/HomeStack';
import HistoryStack from './stack/HistoryStack';
import ScanStack from './stack/ScanStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#9ad1d4' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = 'home';
          if (route.name === 'Scanner') {
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
        component={ScanStack}
        options={{
          title: 'Escaner',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStack}
        options={{
          title: 'Historial',
        }}
      />
    </Tab.Navigator>
  );
}
