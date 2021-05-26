import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HistoryScreen from '../../screens/HistoryScreen';

const Stack = createStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="HystoryScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9ad1d4',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Menu"
        component={HistoryScreen}
        options={{
          title: 'Historial',
        }}
      />
    </Stack.Navigator>
  );
}
