import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { fonts } from '../styles/fonts';

import CheckBoxAl from './CheckBoxAl';

export default function CheckListAl({ data, navigation }) {
  /* --------------------------------- RETURN --------------------------------- */

  return (
    <ScrollView style={{ flex: 1, flexDirection: 'column', marginTop: 30 }}>
      {data.map((item) => (
        <View key={item.id} style={{ flexDirection: 'row', paddingTop: 10 }}>
          <CheckBoxAl item={item} navigation={navigation} />
          <View style={{ justifyContent: 'center', textAlign: 'center' }}>
            <Text style={fonts.blackFont}>{item.name}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
