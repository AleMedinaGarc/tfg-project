import React, { useState, useEffect } from "react";
import { fonts, R, Y, B, G } from "../styles/fonts";
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';

// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url
// 8480000107480
export default function ProductCard({ data, config, navigation }) {
    const [backColor, setBackColor] = useState("#FFFFF");
    const [edible, setEdible] = useState(true);
    let allergensFound = [];


    useEffect(() => {
        if (data == null) return;
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

    function checkName() {

        if (data == null) return;
        if (data.status == 0) return "No está escaneando un alimento";

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

    function checkImage(data) {
        if (data == null) return "null";
        console.log(data.product.image_fron)
        if (data.status == 0)
            return "No está escaneando un alimento";
        if (data.product.image_front_url != "")
            return data.product.image_front_url;
        else
            return "noImage";
    }

    function renderEdible() {

        if (data == null) return;

        if (edible == true) {
            if (data.product.unique_scans_n <= 20) {
                return <Text style={fonts.blackFont}>Comestible, pero tiene la cantidad de X escaneos</Text> //en naranja
            } else {
                return <Text style={fonts.blackFont}>Comestible</Text>
            }
        } else {
            return (
                <View>
                    <Text style={fonts.blackFont}>No Comestible</Text>
                    {allergensFound.map((allergen) => <Text>{allergen}</Text>)}
                </View>
            )

        }

    }


    return (
        <View style={{ width: 300, height: 500, backgroundColor: `${backColor}` }}>
            <View style={{ marginTop: 300,backgroundColor: "#FFFFFF"}}>
            {/* <Image source={require(`${checkImage()}`)}
                style={{ width: 400, height: 400 }}
            /> */}
            <Text style={fonts.blackFont}>{checkName()}</Text>
            { renderEdible()}
            </View>
        </View>
    );
}

