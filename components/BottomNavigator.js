import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const ScannerRoute = () => <Text>Escaner</Text>;
const HomeRoute = () => <Text>Menú</Text>;
const HistoryRoute = () => <Text>Historial</Text>;

export default function BottomNavigator () {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'scanner', title: 'Escanear', icon: 'barcode-scan' },
    { key: 'home', title: 'Menú', icon: 'home' },
    { key: 'history', title: 'Historial', icon: 'format-list-bulleted' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    scanner: ScannerRoute,
    home: HomeRoute,
    history: HistoryRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
