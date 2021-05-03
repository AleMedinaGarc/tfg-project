import { StyleSheet, Text, Linking } from 'react-native';
import React from 'react';

const MainFont = {
  fontSize: 16,
  fontWeight: '300',
  padding: 10,
  paddingLeft: 30,
  paddingRight: 30,
};
export const fonts = StyleSheet.create({
  blackFont:
        {
          ...MainFont,
          color: '#505050',
        },
});

export const B = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>;
export const Y = ({ children }) => <Text style={{ color: '#ff6700', fontWeight: 'bold', textDecorationLine: 'underline' }}>{children}</Text>;
export const G = ({ children }) => <Text style={{ color: '#00693e', fontWeight: 'bold', textDecorationLine: 'underline' }}>{children}</Text>;
export const R = ({ children }) => <Text style={{ color: '#ac0d0d', fontWeight: 'bold', textDecorationLine: 'underline' }}>{children}</Text>;
export const L = ({ children }) => <Text onPress={() => Linking.openURL('https://www.ull.es/')} style={{ color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline' }}>{children}</Text>;
