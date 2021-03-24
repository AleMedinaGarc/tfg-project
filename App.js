import * as React from 'react';
import { Provider as PaperProvider, Text, Button, DefaultTheme } from 'react-native-paper';
import BottomNavigator from "./components/BottomNavigator"
import { StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Hello world!</Text>
      </View>
      <BottomNavigator/>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#eda5a5',
    accent: 'yellow',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});