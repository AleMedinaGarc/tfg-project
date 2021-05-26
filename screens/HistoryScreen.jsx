import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, Text } from 'react-native';

import HistoryCard from '../components/HistoryCard';
import { getJsonConfigConst } from '../components/DataStream';
import * as NewItemProvider from '../components/context/NewItemProvider';

export default function HistoryScreen() {
  /* -------------------------------- CONTEXTS -------------------------------- */
  const { scanned, newItem } = useContext(NewItemProvider.NewItemContext);

  /* --------------------------------- STATES --------------------------------- */

  const [data, setData] = useState([]);

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    getJsonConfigConst('history').then((value) => setData(value));
  }, [scanned, newItem]);

  /* --------------------------------- RETURN --------------------------------- */
  return (
    <ScrollView>
      <View style={{ height: '100%', marginTop: '15%' }}>
        {data.length !== 0 ? data.map((item) => <HistoryCard key={item.code} item={item} />)
          : (
            <View style={{ marginTop: '70%', alignItems: 'center', justifyContent: 'center' }}>
              <Text>El historial está vacío.</Text>
            </View>
          )}
      </View>
    </ScrollView>
  );
}
