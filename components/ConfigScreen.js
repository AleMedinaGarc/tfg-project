import * as React from 'react';
import { View, Text } from 'react-native';
import { Button} from 'react-native-paper';
import { fonts } from "../styles/fonts"
//import CheckListAl from "./CheckListAl"


export function ConfigScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={fonts.blackFont}>
                Selecciona los alérgenos que quieres evitar:</Text>
            <Button
                mode="contained" color="#80ced7"
                onPress={() => 

                    navigation.navigate(ConfigScreen)}
                style={styles.buttonCustom}
            >
                Aceptar
            </Button>
        </View>
    );
}


