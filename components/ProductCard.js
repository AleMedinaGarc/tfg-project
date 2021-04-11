import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { fonts } from "../styles/fonts"

import { getJsonConfigConst } from "../components/DataStream"

// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url

export default function ProductCard({ data, navigation }) {
    const [backColor, setBackColor] = useState("#556b2f");
    const [edible, setEdible] = useState(true);
    let allergensFound = [];
    const config = getJsonConfigConst();

    function checkName() {
        if (data.status == 0)
            return "No está escaneando un alimento";
        if (data.product.product_name_es != "")
            return data.product.product_name;
        else
            if (data.product.product_name != "")
                return data.product.name_en;
            else
                if (data.product.name_en != "")
                    return data.product.product_name_en;
                else
                    if (data.product.product_name_en != "")
                        return data.product.generic_name;
                    else
                        return "noNamed";
    }

    function isAccepted() {
        for (let i = 0; i < data.product.alergen_tags.length; i++) {
            for (let k = 0; k < data.product.alergen_tags.length; k++) {
                if (data.product.alergen_tags.[i] == config.encoded[k]) {
                    setEdible(false);
                    allergensFound.push(config.name[k])
                }
            }
        }

        if (edible == true) {
            if (data.product.unique_scans_n <= 20) {
                setBackColor("#ff6700")
                return <Text> Comestible, pero tiene la cantidad de X escaneos </Text> //en naranja
            } else {
                setBackColor("#00693e")
                return <Text>Comestible</Text> //En verde
            }
        } else {
            setBackColor("#ac0d0d")
            return (
                <View>
                    <Text>No Comestible</Text> // En rojo
                    {allergensFound.map((allergen) => <Text>{allergen}</Text>)}
                </View>
            )

        }
    }
    return (
        <View style={{ width: 500, height: 1000, backgroundColor: `${backColor}` }}>
            <View style={{ width: 20, height: 30, backgroundColor: "#FFFFFF" }}>
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ width: 400, height: 400 }} />
                <Text>{checkName()}</Text>
                {isAccepted()}
            </View>
        </View >
    );
}

