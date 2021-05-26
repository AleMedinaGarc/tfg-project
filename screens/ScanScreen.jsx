import React, { useState, useEffect, useContext } from 'react';
import {
  Text, View, StyleSheet, ActivityIndicator,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { getJsonConfigConst } from '../components/DataStream';
import * as ChangeProvider from '../components/context/ChangeProvider';
import * as NewItemProvider from '../components/context/NewItemProvider';

/* --------------------------------- STYLES --------------------------------- */
const opacity = 'rgba(0, 0, 0, .4)';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
  },
  buttonCustom: {
    marginTop: 20,
    height: 45,
    width: 200,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity,
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
    height: '100.2%',
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
    height: '100.2%',
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
});

export default function ScanScreen({ navigation }) {
/* -------------------------------- CONTEXTS -------------------------------- */

  const { didChange, setDidChange } = useContext(ChangeProvider.ChangeContext);
  const { scanned, setScanned } = useContext(NewItemProvider.NewItemContext);

  /* --------------------------------- STATES --------------------------------- */

  const [hasPermission, setHasPermission] = useState(null);
  const [config, setConfig] = useState();

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [hasPermission]);

  useEffect(() => {
    getJsonConfigConst('myData').then((value) => {
      setConfig(value);
      setDidChange(false);
    });
  }, [didChange]);

  /* -------------------------------- FUNCTIONS ------------------------------- */

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.navigate('ProductScreen', { barCode: data, config });
  };

  const loadTransition = () => {
    if (hasPermission === null) {
    // Animacion de carga
      return <ActivityIndicator size={70} color="#9ad1d4" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />;
    }
    if (hasPermission === false) {
      return <Text>No hay acceso a la cámara.</Text>;
    }
  };

  /* --------------------------------- RETURN --------------------------------- */

  return (
    <View style={styles.container}>
      {loadTransition()}
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
