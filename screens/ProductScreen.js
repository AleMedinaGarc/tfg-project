import React, { useState, useEffect } from "react";
import { ActivityIndicator, View } from 'react-native';


import ProductCard from "../components/ProductCard";
import { useFetch } from "../components/CustomHooks"


export default function ProductScreen({ route, navigation }) {
    const { barCode, config } = route.params;
    //const [loading, setLoading] = useState(true);
    //const [data, setData] = useState([]);
    const url = `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`;
    //const [isError, setIsError] = useState(false);

    const [response, loading, hasError] = useFetch(url)

    console.log(response);
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            { loading ?
                <ActivityIndicator size={70} color="#9ad1d4" /> :
                (hasError ?
                    <Text>Error occured.</Text> :
                    <ProductCard data={response.data} config={config} navigation={navigation}></ProductCard>)}
        </View>
    );
}
