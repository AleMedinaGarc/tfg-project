import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    //setScanned(true);
    //if (type === "32" || type === "64") {
      navigation.navigate("ProductScreen", {barCode: data})
    //} else {
    //  alert(`Esta aplicación no soporta escaneos de tipo ${type}`)
    //}
    // 32 y 64 son el tipo para productos alimenticios
    //setScanned(false)
  };

  if (hasPermission === null) {
    //Animacion de carga
    return <ActivityIndicator size={70} color="#9ad1d4" style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
  }
  if (hasPermission === false) {
    return <Text>No hay acceso a la cámara.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.layerTop} />
      <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
      </View>
      <View style={styles.layerBottom} />
      {scanned && <Button style={styles.buttonCustom} title={"Volver a escanear"} onPress={() => setScanned(false)} />}
    </View>
  );
  // Cambiar el boton de la derecha de && por un componente info
}

const opacity = 'rgba(0, 0, 0, .8)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonCustom: {
    marginTop: 20,
    height: 45,
    width: 200,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",

  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
    height: "100.2%"
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
    height: "100.2%"
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});