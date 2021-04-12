import React, { useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { fonts, R, Y, B, G } from "../styles/fonts"

import { getJsonConfigConst } from "./DataStream"

// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url
// 8480000107480
export default function ProductCard({ data, config, navigation }) {
    const [backColor, setBackColor] = useState("#FFFFF");
    const [edible, setEdible] = useState(true);
    let allergensFound = [];

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

    function checkImage() {
        if (data.status == 0)
            return "No está escaneando un alimento";
        if (data.product.image_front_url != "")
            return data.product.image_front_url;
        else
            return "noImage";
    }

    function isAccepted() {
        console.log(config);
        let mergeAllergens = data.product.allergens_tags.concat(data.product.traces_tags)
        for (let tag of mergeAllergens) {
                //  8480000107480
            for (let elemTag of config) {
                console.log("elemtag: " + elemTag["encoded"])
                if ((tag == elemTag["encoded"]) && elemTag["check"]) {
                    setEdible(false);
                    console.log("uwu")
                    allergensFound.push(elemTag["name"])
                }
            }
        }

        // if (edible == true) {
        //     if (data.product.unique_scans_n <= 20) {
        //         //setBackColor("#ff6700");
        //         return <Text style={fonts.blackFont}><Y>Comestible, pero tiene la cantidad de X escaneos</Y></Text> //en naranja
        //     } else {
        //         //setBackColor("#00693e");
        //         return <Text style={fonts.blackFont}><G>Comestible</G></Text>
        //     }
        // } else {
        //     //setBackColor("#ac0d0d");
        //     return (
        //         <View>
        //             <Text style={fonts.blackFont}><R>No Comestible</R></Text>
        //             {allergensFound.map((allergen) => <Text>{allergen}</Text>)}
        //         </View>
        //     )

        // }
    }
    return (
        <View style={{ width: 500, height: 1000, backgroundColor: `${backColor}` }}>
            <View style={{ width: 20, height: 30, backgroundColor: "#FFFFFF" }}>
                {/* <Image source={`${checkImage()}`}
                    style={{ width: 400, height: 400 }} /> */}
                <Text style={fonts.blackFont}>{checkName()}</Text>
                {isAccepted()}
            </View>
        </View >
    );
}

