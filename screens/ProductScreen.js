import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

import ProductCard from "../components/ProductCard";
import { useFetch } from "../components/CustomHooks"


export default function ProductScreen({ route, navigation }) {
    const { barCode, config } = route.params;
    const url = `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`;


    const { response, loading, error }= useFetch(url);
    
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            { loading ?
                <ActivityIndicator size={70} color="#9ad1d4" /> :
                (error ?
                    <Text>Error occured.</Text> :
                    <ProductCard data={response} config={config} navigation={navigation}></ProductCard>)}
        </View>
    );
}
