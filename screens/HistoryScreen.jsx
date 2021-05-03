import React from 'react';
import { View } from 'react-native';

import HistoryCard from '../components/HistoryCard';
import { getJsonConfigConst } from '../components/DataStream';

export default function HistoryScreen() {
  const history = getJsonConfigConst();

  /* --------------------------------- RETURN --------------------------------- */

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {history.map((item) => <HistoryCard item={item} />)}
    </View>
  );
}
