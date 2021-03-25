import * as React from 'react';
import { Provider as PaperProvider, Text, DefaultTheme } from 'react-native-paper';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import HomeScreen from "./components/HomeScreen"

// https://betterprogramming.pub/react-navigation-5-stack-tab-drawer-all-in-one-ead723188056

const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ayuda"
        onPress={() => navigation.navigate('Ayuda')}
      />
      <Button
        title="Configuración"
        onPress={() => navigation.navigate('Configuración')}
      />
    </View>
  );
}

function HelpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Esto es una ayuda</Text>
      <Button
        title="Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

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
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Inicio"
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: '#eda5a5',
    //       },
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //       headerTitleAlign: 'center',
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Inicio"
    //       component={HomeScreen}
    //       options={{
    //         title: 'Inicio',
    //       }}
    //     />
    //     <Stack.Screen
    //       name="Ayuda"
    //       component={HelpScreen}
    //       options={{
    //         title: 'Ayuda'
    //       }}
    //     />
    //     <Stack.Screen name="Configuracion" component={HelpScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#eda5a5' }}
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

// export default function App() {
//   return (
//     <PaperProvider theme={theme}>
//         {/* <Scanner/>
//         <Main/>
//         <History/> */}
//       <BottomNavigator/>
//     </PaperProvider>
//   );
// }

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#eda5a5',
//     accent: 'yellow',
//   },
// };