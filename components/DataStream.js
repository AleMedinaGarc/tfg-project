import AsyncStorage from "@react-native-async-storage/async-storage";


let getJsonConfig = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("myData")
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        alert(e);
    }
}

const setJsonConfig = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem("myData", jsonValue)
    } catch (e) {
        alert(e);
    }
}

const removeJsonConfig = async () => {
    try {
        await AsyncStorage.removeItem("myData")
    } catch (e) {
        alert(e);
    }
}

const getJsonConfigConst = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("myData")
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
        alert(e)
    }
}

export { getJsonConfigConst, removeJsonConfig, setJsonConfig, getJsonConfig };