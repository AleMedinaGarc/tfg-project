import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fonts } from '../styles/fonts';

import { getJsonConfigConst } from '../components/DataStream';
import CheckboxContainer from '../components/CheckListAl';

export default function ConfigScreen({ navigation }) {
  /* --------------------------------- States --------------------------------- */

  const [data, setData] = useState([]);

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    getJsonConfigConst('myData').then((value) => setData(value, 'myData'));
  }, []);

  /* --------------------------------- RETURN --------------------------------- */

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '3%',
      }}
    >
      <Text style={fonts.blackFont} style={{ marginTop: '10%', fontSize: 17 }}>
        Selecciona el alérgeno que quieres evitar:
      </Text>
      <CheckboxContainer data={data} navigation={navigation} />
    </View>
  );
}
