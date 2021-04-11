import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function ScanScreenWeb({ navigation }) {
  const [ barcode, setBarcode] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <TextInput
        label="Código de barras"
        mode="outlined"
        value={barcode}
        onChangeText={barcode => setBarcode(barcode)}
      /> */}
      <TextInput
        onChangeText={barcode => setBarcode(barcode)}
        value={barcode}
      />
      <Button
        mode="contained" color="#80ced7"
        onPress={() => navigation.navigate("ProductScreen", {barCode: barcode})}
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


