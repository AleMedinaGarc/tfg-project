import AsyncStorage from '@react-native-async-storage/async-storage';

const getJsonConfig = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

const setJsonConfig = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    alert(e);
  }
};

const removeJsonConfig = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    alert(e);
  }
};

const getJsonConfigConst = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

export {
  getJsonConfigConst, removeJsonConfig, setJsonConfig, getJsonConfig,
};
