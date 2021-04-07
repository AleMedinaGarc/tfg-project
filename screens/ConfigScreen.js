import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { fonts } from "../styles/fonts"

import { getJsonConfigConst } from "../components/DataStream"
import CheckboxContainer from "../components/CheckListAl";


export function ConfigScreen({ navigation }) {
      
    const [data, setData] = useState([]);

    useEffect(() => {
        getJsonConfigConst().then((value) => 
        setData(value))
    }, [])
        
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingBottom:"3%" }}>
            <Text style={fonts.blackFont}>
                Selecciona el alérgeno que quieres evitar:</Text>
            <CheckboxContainer data={data} navigation={navigation}></CheckboxContainer>
        </View>
    );
}
