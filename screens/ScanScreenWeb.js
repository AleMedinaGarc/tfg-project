import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { getJsonConfigConst } from "../components/DataStream"


export default function ScanScreenWeb({ navigation }) {
  const [barcode, setBarcode] = useState("");
  const [config, setConfig] = useState([])

  useEffect(() => {
    getJsonConfigConst()
      .then((value) => setConfig(value));
  }, []);

  return (
    <View style={{ zIndex: 999, flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        label="Código de barras"
        mode="outlined"
        value={barcode}
        onChangeText={barcode => setBarcode(barcode)}
      />
      <Button
        mode="contained" color="#80ced7"
        onPress={() => navigation.navigate("ProductScreen", { barCode: barcode, config: config })}
        style={styles.buttonCustom}
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonCustom: {
    marginTop: 20,
    height: 45,
    width: 200,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",
    zIndex: 999
  },
  logo: {
    width: 200,
    height: 200,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    height: "100%",
    width: "100%",
    paddingLeft: 10,
  }
});


