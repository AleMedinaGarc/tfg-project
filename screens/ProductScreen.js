import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { fonts } from "../styles/fonts"

import { getJsonConfigConst } from "../components/DataStream"


export default function ProductScreen({ route, navigation }) {
    // codigo de barras
    const { barCode } = route.params;
    const [isLoading, setLoading] = useState(true);
    // const [name, setName]
    getJsonConfigConst();

    function checkName(json) {
        if (json.product_name != "")
            return json.product_name;
        else
            if (json.name_en != "")
                return json.name_en;
            else
                if (json.product_name_en != "")
                    return json.product_name_en;
                else
                    if (json.generic_name != "")
                        return json.generic_name;
                    else
                        if (json.product_name_fr != "")
                            return json.product_name_fr;
                        else
                            return "noNamed";
    }

    const getProduct = async () => {
        try {
            let response = await fetch(
                `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`
            ).finally(() => setLoading(false));
            let json = await response.json();
            return checkName(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProduct();
    })

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingBottom: "3%" }}>
            {isLoading ? <ActivityIndicator /> : (
                <Text style={fonts.blackFont}>{getProduct}</Text>
            )}
          
        </View>
    );
}
