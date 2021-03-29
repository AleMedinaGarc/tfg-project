import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { HelpScreen } from "./HelpScreen"

const Stack = createStackNavigator();

function Menu({ navigation }) {
    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={styles.logo}
                source={require('../assets/allerga.png')}
            />
            <View style={{ height: 50}}/>
            <Button
                mode="contained" color="#80ced7"
                onPress={() => navigation.navigate(Config)}
                style={styles.buttonCustom}
            >
                <Ionicons name="settings-outline" size={20}> </Ionicons>
                <Text>Configuración</Text>
            </Button>
            <Button
                mode="contained" color="#80ced7"
                onPress={() => navigation.navigate(HelpScreen)}
                style={styles.buttonCustom}
            >
                <Ionicons name="help-circle" size={20}></Ionicons>
                <Text>Ayuda</Text>
            </Button>
        </View>
    );
}

function Config() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Esto es config</Text>
        </View>
    );
}

export function HomeScreen() {
    return (
        <Stack.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#9ad1d4',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: 'Inicio',
                }}
            />
            <Stack.Screen
                name="Config"
                component={Config}
                options={{
                    title: 'Configuración'
                }}
            />
            <Stack.Screen
                name="HelpScreen"
                component={HelpScreen}
                options={{
                    title: 'Ayuda'
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    buttonCustom: {
        marginTop: 20,
        height: 50,
        width: 200,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',

    },
    logo: {
        width: 200,
        height: 200,
    }
});