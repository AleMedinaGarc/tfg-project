import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { fonts } from "../styles/fonts"

import { getJsonConfigConst } from "../components/DataStream"


export default function ProductScreen({ route, navigation }) {
    const { barCode } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    getJsonConfigConst();

    function checkName() {
        if (data.status == 0)
            return "No está escaneando un alimento";
        if (data.product.product_name != "")
            return data.product.product_name;
        else
            if (data.product.product_name_es != "")
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



    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ?
                <ActivityIndicator size={70} color="#9ad1d4" style={{ flex: 1, alignItems: "center", justifyContent: "center" }} /> : (
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text>{checkName()}</Text>
                    </View>
                )}
        </View>
    );
}

<ActivityIndicator size={70} color="#9ad1d4" style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
