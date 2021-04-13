import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { getJsonConfigConst } from "../components/DataStream"
import { ChangeContext } from "../components/ChangeProvider"


export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const{ didChange, setDidChange }= useContext(ChangeContext)


  const [config, setConfig] = useState()

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    getJsonConfigConst()
      .then((value) =>{
        setConfig(value);
        setDidChange(false);
      })
  }, [didChange]);

  const handleBarCodeScanned = ({ type, data }) => {
    //setScanned(true);
    if (type == "32" || type == "64") 
      navigation.navigate("ProductScreen", {barCode: data, config: config})
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
    </View>
  );
}

const opacity = "rgba(0, 0, 0, .4)";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
    flexDirection: "row"
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