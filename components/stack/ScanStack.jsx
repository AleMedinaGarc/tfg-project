import React, { useContext } from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductScreen from '../../screens/ProductScreen';
import ScanScreen from '../../screens/ScanScreen';
import ScanScreenWeb from '../../screens/ScanScreenWeb';

import * as NewItemProvider from '../context/NewItemProvider';

const Stack = createStackNavigator();

export default function ScanStack() {
  /* -------------------------------- CONTEXTS -------------------------------- */
  const { setScanned, setNewItem } = useContext(NewItemProvider.NewItemContext);
  /* --------------------------------- RETURN --------------------------------- */
  return (
    <Stack.Navigator
      initialRouteName="Scanner"
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
        name="Scanner"
        component={Platform.OS === 'android' ? ScanScreen : ScanScreenWeb}
        options={{
          title: 'Escaner',
        }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ navigation }) => ({
          title: 'Producto',
          headerLeft: () => (
            <HeaderBackButton onPress={() => {
              navigation.pop();
              setScanned(false);
              setNewItem(false);
            }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
