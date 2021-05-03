import React, { useState, useEffect } from 'react';
import {
  Text, View, Image, StyleSheet,
} from 'react-native';
import { Title, Button } from 'react-native-paper';
import {
  fonts, R, Y, G,
} from '../styles/fonts';

// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url
// 8480000107480 leche hacendado

/* --------------------------------- STYLES --------------------------------- */

const styles = StyleSheet.create({
  blankCard: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
    width: '80%',
    height: '80%',
    backgroundColor: '#FFFFFF',
  },
  cardImage: {
    marginTop: '15%',
    marginBottom: '15%',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonCustom: {
    marginTop: 20,
    height: 45,
    width: 200,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
  },
  errorMesage: {
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: '10%',
    width: 200,
    justifyContent: 'center',
  },
  blankCardError: {
    borderRadius: 10,
    borderColor: '#ff6666',
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: '60%',
    width: '80%',
    height: '80%',
    backgroundColor: '#FFFFFF',
  },
});

export default function ProductCard({ data, config, navigation }) {
  /* --------------------------------- STATES --------------------------------- */

  const [backColor, setBackColor] = useState('#FFFFF');
  const [edible, setEdible] = useState(true);
  const [allergensFound, setAllergensFound] = useState();
  const [isValid, setIsValid] = useState(true);
  const [name, setName] = useState('');

  /* -------------------------------- FUNCTIONS ------------------------------- */

  function checkName() {
    if (data == null || data.status === 0) return;

    if (data.product.product_name_es !== '') {
      return setName(data.product.product_name);
    }
    if (data.product.product_name !== '') {
      return setName(data.product.name_en);
    }
    if (data.product.name_en !== '') {
      return setName(data.product.product_name_en);
    }
    if (data.product.product_name_en !== '') {
      return setName(data.product.generic_name);
    }
    return setName('noNamed');
  }

  function checkImage() {
    if (data == null || data.status === 0) return;

    if (data.product.image_front_url !== '') {
      return data.product.image_front_url;
    }
    return 'noImage';
  }

  function renderEdible() {
    if (data == null) return;
    if (data.status === 0) {
      return (
        <Text>
          No está escaneando un alimento o no se encuentra en la base de datos.
        </Text>
      );
    }
    if (edible === true) {
      if (data.product.unique_scans_n < 10) {
        return (
          <View>
            <Text
              style={fonts.blackFont}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              style={{ fontSize: 17, marginTop: '3%', marginLeft: '4%' }}
            >
              <Y>Apto para consumo. PRECAUCIÓN:</Y>
            </Text>
            <Text style={fonts.blackFont}>
              {`Tiene muy pocos escaneos(${data.product.unique_scans_n}), así que la información de alérgenos puede estar incompleta.`}
            </Text>
          </View>
        );
      }
      return (
        <Text style={fonts.blackFont}>
          <G>Apto para consumo</G>
        </Text>
      );
    }
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={fonts.blackFont}>
          <R>No apto para consumo</R>
        </Text>
        <Text style={fonts.blackFont}>
          Contiene:
          {allergensFound}
        </Text>
      </View>
    );
  }

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    if (data == null || data === undefined) return;
    checkName();
    if (data.status === 0) {
      setIsValid(false);
      return;
    }
    const mergeAllergens = data.product.allergens_tags.concat(
      data.product.traces_tags,
    );
    for (const tag of mergeAllergens) {
      for (const elemTag of config) {
        if (tag === elemTag.encoded && elemTag.check) {
          setEdible(false);
          setAllergensFound(elemTag.name);
        }
      }
    }
    if (edible === true) {
      if (data.product.unique_scans_n < 10) {
        setBackColor('#ff6700');
      } else {
        setBackColor('#00693e');
      }
    } else {
      setBackColor('#ac0d0d');
    }
  });

  /* --------------------------------- RETURN --------------------------------- */

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: `${backColor}`,
      }}
    >
      {isValid ? (
        <View style={styles.blankCard}>
          <Image source={{ uri: `${checkImage()}` }} style={styles.cardImage} />
          {name.length < 23 ? (
            <Title style={{ marginLeft: '2%', marginRight: '2%' }}>
              {name}
            </Title>
          ) : (
            <Text
              style={{
                marginLeft: '2%',
                marginRight: '2%',
                fontWeight: 'bold',
                fontSize: 15,
              }}
            >
              {name}
            </Text>
          )}
          {renderEdible()}
          <Button
            mode="contained"
            color="#80ced7"
            onPress={() => navigation.pop()}
            style={styles.buttonCustom}
          >
            <Text style={styles.buttonText}>Escanear de nuevo</Text>
          </Button>
        </View>
      ) : (
        <View style={styles.blankCardError}>
          <Text style={fonts.blackFont}>
            No está escaneando un alimento o no se encuentra en la base de
            datos.
          </Text>
          <Button
            mode="contained"
            color="#80ced7"
            onPress={() => navigation.pop()}
            style={styles.buttonCustom}
          >
            <Text style={styles.buttonText}>Escanear de nuevo</Text>
          </Button>
        </View>
      )}
    </View>
  );
}
