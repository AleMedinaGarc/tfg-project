import * as React from 'react';
import { Provider as Text, Button } from 'react-native-paper';
import { View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ayuda"
        onPress={() => navigation.navigate('Ayuda')}
      />
      <Button
        title="Configuración"
        onPress={() => navigation.navigate('Configuración')}
      />
    </View>
  );
}

  