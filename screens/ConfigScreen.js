import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from "../styles/fonts"
import AsyncStorage from '@react-native-async-storage/async-storage'

import CheckboxContainer from '../components/CheckListAl';


export function ConfigScreen({ navigation }) {
    const dataFile = [
        { "name": "Gluten",               "id": "0",  "check":false },
    ]
      
    const [data, setData] = useState(dataFile);

    const getMyStringValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("myData")
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        getMyStringValue().then((value) => 
        setData(value))
    }, [])
        
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={fonts.blackFont}>
                Selecciona el alérgeno que quieres evitar:</Text>
            <CheckboxContainer data={data} navigation={navigation}></CheckboxContainer>
        </View>
    );
}
