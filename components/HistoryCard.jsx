import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  blankCard: {
    borderRadius: 2,
    borderColor: 'grey',
    marginLeft: '5%',
    marginBottom: '5%',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    flexDirection: 'row',
  },
  textField: {
    marginLeft: '10%',
    marginTop: '2%',
  },
  titleField: {
    marginLeft: '10%',
    marginTop: '2%',
    fontSize: 17,
    fontWeight: 'bold',
    maxWidth: '65%',
  },
  edibleField: {
    flexDirection: 'row',
    marginLeft: '10%',
    marginTop: '2%',
  },
  imageField: {
    marginTop: '6%',
    marginLeft: '6%',
    marginBottom: '6%',
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default function HystoryCard({ item }) {
  const renderColor = () => {
    if (item.edible === true) {
      if (item.scans < 10) return '#ff6700';
      return '#00693e';
    }
    return '#ac0d0d';
  };

  return (
    <View style={styles.blankCard}>
      <View>
        <Image source={{ uri: `${item.image}` }} style={styles.imageField} />
      </View>
      <View>
        <Text style={styles.titleField}>{item.name.substring(0, 35)}</Text>
        <View style={styles.edibleField}>
          <Ionicons name="ellipse" size={20} color={renderColor()} />
          <Text>{item.edible ? 'Apto' : 'No apto'}</Text>
        </View>
        <Text style={styles.textField}>Código de barras:</Text>
        <Text style={styles.textField}>{item.code}</Text>
      </View>
    </View>
  );
}

/* ---------------------------------- To do --------------------------------- */
/* ------------------------------- Hacer Fondo ------------------------------ */
/* ------------------------------ Poner iconos ------------------------------ */
/* --------------------------------- Mapear --------------------------------- */
