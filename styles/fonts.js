import { StyleSheet, Text } from "react-native"
import React from "react";

const MainFont = {
        // fontFamily: "OpenSans",
        fontSize: 16,
        fontWeight: "300",
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
}
export const fonts = StyleSheet.create({
        blackFont:
        {
                ...MainFont,
                color: "#505050",
        },
})

export const B = (props) => <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
export const Y = (props) => <Text style={{ color: "#ff6700", fontWeight: "bold" }}>{props.children}</Text>
export const G = (props) => <Text style={{ color: "#00693e", fontWeight: "bold" }}>{props.children}</Text>
export const R = (props) => <Text style={{ color: "#ac0d0d", fontWeight: "bold" }}>{props.children}</Text>
