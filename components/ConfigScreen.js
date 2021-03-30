import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button} from 'react-native-paper';
import { fonts } from "../styles/fonts"

import CheckboxContainer from './CheckListAl';


export function ConfigScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={fonts.blackFont}>
                Selecciona los alérgenos que quieres evitar:</Text>
            <Button
                mode="contained" color="#80ced7"
                onPress={() => 

                    navigation.goBack()}
                style={styles.buttonCustom}
            >
                <Text style={styles.buttonText}>Actualizar</Text>
            </Button>
            <CheckboxContainer></CheckboxContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonCustom: {
        marginTop: 20,
        height: 40,
        width: 150,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        height: '100%',
        width: '100%',
        paddingLeft: 10,
    }
});
