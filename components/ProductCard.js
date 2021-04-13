import React, { useState, useEffect } from "react";
import { fonts, R, Y, B, G } from "../styles/fonts";
import { Text, View, Image, StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";

// vector de alergenos alergen_tags y traces_tags
// popularidad unique_scans_n
// imagen image_front_url
// 8480000107480 leche hacendado

export default function ProductCard({ data, config, navigation }) {
    const [backColor, setBackColor] = useState("#FFFFF");
    const [edible, setEdible] = useState(true);
    const [allergensFound, setAllergensFound] = useState();
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if (data == null || data == undefined) return;
        if (data.status == 0) {
            setIsValid(false);
            return;
        }
        let mergeAllergens = data.product.allergens_tags.concat(data.product.traces_tags)

        for (let tag of mergeAllergens)
            for (let elemTag of config)
                if ((tag == elemTag["encoded"]) && elemTag["check"]) {
                    setEdible(false);
                    setAllergensFound(elemTag["name"]);
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
        if (data == null || data.status == 0) return;

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
        if (data == null || data.status == 0) return;

        if (data.product.image_front_url != "")
            return data.product.image_front_url;
        else
            return "noImage";
    }

    function renderEdible() {
        if (data == null) return;
        if (data.status == 0) return <Text>No está escaneando un alimento o no se encuentra en la base de datos.</Text>;
        if (edible == true)
            if (data.product.unique_scans_n <= 20)
                return <Text style={fonts.blackFont}><Y>{`Apto, pero tiene un total de ${data.product.unique_scans_n} escaneos totales.`}</Y></Text>
            else
                return <Text style={fonts.blackFont}><G>Apto para consumo</G></Text>
        else {
            return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={fonts.blackFont}><R>No apto para consumo</R></Text>
                    <Text style={fonts.blackFont}>Contiene: {allergensFound}</Text>
                </View>
            )
        }
    }


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: `${backColor}` }}>
            {isValid ?
                (
                    <View style={styles.blankCard}>
                        <Image source={{ uri: `${checkImage()}` }} style={styles.cardImage} />
                        <Title>{checkName()}</Title>
                        {renderEdible()}
                        <Button
                            mode="contained" color="#80ced7"
                            onPress={() => navigation.pop()}
                            style={styles.buttonCustom}
                        >
                            <Text style={styles.buttonText}>Escanear de nuevo</Text>
                        </Button>
                    </View>
                ) :
                (
                    <View style={styles.blankCardError} >
                        <Text style={fonts.blackFont} >No está escaneando un alimento o no se encuentra en la base de datos.</Text>
                        <Button
                            mode="contained" color="#80ced7"
                            onPress={() => navigation.pop()}
                            style={styles.buttonCustom}
                        >
                            <Text style={styles.buttonText}>Escanear de nuevo</Text>
                        </Button>
                    </View>
                )}


        </View>
    );
}

const styles = StyleSheet.create({
    blankCard: {
        borderRadius: 10,
        flex: 1,
        alignItems: "center",
        marginTop: "10%",
        marginBottom: "10%",
        width: "80%",
        height: "80%",
        backgroundColor: "#FFFFFF",
    },
    cardImage: {
        marginTop: "15%",
        marginBottom: "15%",
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    buttonCustom: {
        marginTop: 20,
        height: 45,
        width: 200,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: "center",
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        height: "100%",
        width: "100%",
    },
    errorMesage: {
        alignItems: "center",
        marginTop: "50%",
        marginBottom: "10%",
        width: 200,
        justifyContent: "center",

    },
    blankCardError: {
        borderRadius: 10,
        borderColor: "#ff6666",
        borderWidth: 3,
        flex: 1,
        alignItems: "center",
        marginTop: "50%",
        marginBottom: "60%",
        width: "80%",
        height: "80%",
        backgroundColor: "#FFFFFF",
    },
});
