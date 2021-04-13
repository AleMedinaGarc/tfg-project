import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';
import { fonts, R, Y, B, G } from "../styles/fonts"


// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url
// 8480000107480
export default function ProductCard({ data, config, navigation }) {
    const [backColor, setBackColor] = useState("#FFFFF");
    const [edible, setEdible] = useState(true);
    let allergensFound = [];

    function checkName() {
        if (data == null)
            return;
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
        if (data == null)
            return "null";
        if (data.status == 0)
            return "No está escaneando un alimento";
        if (data.product.image_front_url != "")
            return data.product.image_front_url;
        else
            return "noImage";
    }

    useEffect(() => {
        if (data == null)
            return;

        let mergeAllergens = data.product.allergens_tags.concat(data.product.traces_tags)

        for (let tag of mergeAllergens) {
            for (let elemTag of config) {
                if ((tag == elemTag["encoded"]) && elemTag["check"]) {
                    setEdible(false);
                    allergensFound.push(elemTag["name"])
                }
            }
        }

        if (edible == true) {
            if (data.product.unique_scans_n <= 20) {
                setBackColor("#ff6700");
            } else {
                setBackColor("#00693e");
            }
        } else {
            setBackColor("#ac0d0d");

        }
    });

    function renderEdible() {

        if (data == null)
            return;

        if (edible == true) {
            if (data.product.unique_scans_n <= 20) {
                return <Text style={fonts.blackFont}><Y>Comestible, pero tiene la cantidad de X escaneos</Y></Text> //en naranja
            } else {
                return <Text style={fonts.blackFont}><G>Comestible</G></Text>
            }
        } else {
            return (
                <View>
                    <Text style={fonts.blackFont}><R>No Comestible</R></Text>
                    {allergensFound.map((allergen) => <Text>{allergen}</Text>)}
                </View>
            )

        }

    }


    return (
        <View style={{ width: 500, height: 1000, backgroundColor: `${backColor}` }}>
            <View style={{ width: 20, height: 30, backgroundColor: "#FFFFFF" }}>
                {/* <Image source={`${checkImage()}`}
                    style={{ width: 400, height: 400 }} /> */}
                <Text style={fonts.blackFont}>{checkName()}</Text>
                {renderEdible()}
            </View>
        </View >
    );
}

