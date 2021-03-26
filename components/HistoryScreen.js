import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export function HistoryScreen() {
    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40 }}>Home Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Home screen</Text>
            <Button
                icon="settings" mode="contained" color="#eda5a5" 
                onPress={() => navigation.navigate('Inicio')}
            >
                Configuración
            </Button>
            <Button 
                icon="help_outline" mode="contained" color="#eda5a5" 
                onPress={() => navigation.navigate('Inicio')}
            >
                Ayuda
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});