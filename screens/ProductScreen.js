import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { fonts } from "../styles/fonts";

import ProductCard from "../components/ProductCard";
export default function ProductScreen({ route, navigation }) {
    const { barCode } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            {isLoading ?
                <ActivityIndicator size={70} color="#9ad1d4"/> : (
                        <ProductCard data={data} navigation={navigation}></ProductCard> 
                )}
        </View>
    );
}
