import React from 'react';
import {
  ScrollView,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  fonts, R, Y, B, G, L,
} from '../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});

export default function HelpScreen() {
  /* --------------------------------- RETURN --------------------------------- */

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={fonts.blackFont}>
          <B>Allerga </B>
          es una aplicación que sirve para registrar los alérgenos alimentarios
          del usuario, y al escanear un producto, confirmar si es apto para el
          consumo del usuario.
        </Text>
        <Text style={fonts.blackFont}>
          Pueden llegar a darse 3 resultados al escanear un producto:
        </Text>
        <Text style={fonts.blackFont}>
          <G>Apto: </G>
          El usuario puede comer el producto sin problema.
        </Text>
        <Text style={fonts.blackFont}>
          <Y>Precaución: </Y>
          Es apto, pero el producto no tiene suficientes escaneos en la base de
          datos para certificar que la entrada esté completa.
        </Text>
        <Text style={fonts.blackFont}>
          <R>No apto: </R>
          El producto posee uno o más de los alérgenos que ha configurado el
          usuario.
        </Text>
        <Text style={fonts.blackFont}>
          Cuenta con una funcionalidad offline, la cual permite escanear sin
          conexión o con una mala señal, haciendo uso de una base de datos
          interna. Dicha base de datos está limitada, ya que no cuenta con el
          numero de escaneos totales de cada producto, con lo que se puede
          cercionar aún menos de la exactitud y completitud de la entrada.
          Además, con el objetivo de aligerar lo máximo posible la aplicación,
          no se mostrá ni el nombre del alimento ni su foto, solo si es apto o
          no apto junto a sus alergenos perjudiciales si se da el caso de esta
          segunda opción.
        </Text>
        <Text style={fonts.blackFont}>
          Esta aplicación es un proyecto de Trabajo de Fin de Grado (
          <B>TFG</B>
          )
          perteneciente a
          <B> Alejandro Medina García</B>
          , finalizando sus
          estudios de Ingenieria Informática en la
          <L> Universidad de La Laguna</L>
          .
        </Text>
        <Image
          style={{ width: 70, height: 70, padding: 10 }}
          source={require('../assets/iconTrans.png')}
        />
      </View>
    </ScrollView>
  );
}
