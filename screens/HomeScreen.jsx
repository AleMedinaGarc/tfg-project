import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View, Image, Text, StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';

/* --------------------------------- STYLES --------------------------------- */

const styles = StyleSheet.create({
  buttonCustom: {
    marginTop: 20,
    height: 50,
    width: 200,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
    paddingLeft: 10,
  },
});

export default function HomeScreen({ navigation }) {
  /* --------------------------------- RETURN --------------------------------- */

  return (
    <View
      style={{
        ...styles,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={styles.logo} source={require('../assets/allerga.png')} />
      <View style={{ height: 50 }} />
      <Button
        mode="contained"
        color="#80ced7"
        onPress={() => navigation.navigate('ConfigScreen')}
        style={styles.buttonCustom}
        contentStyle={{ height: 50 }}
      >
        <Ionicons name="settings-outline" size={20} />
        <View style={{ paddingLeft: 5 }} />
        <Text style={styles.buttonText}>Configuración</Text>
      </Button>
      <Button
        mode="contained"
        color="#80ced7"
        onPress={() => navigation.navigate('HelpScreen')}
        style={styles.buttonCustom}
        contentStyle={{ height: 50 }}
      >
        <Ionicons name="help-circle" size={20} />
        <View style={{ paddingLeft: 5 }} />
        <Text style={styles.buttonText}>Ayuda</Text>
      </Button>
    </View>
  );
}
