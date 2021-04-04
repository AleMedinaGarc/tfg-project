import React, { useState, useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'

// Cojo myData
// guardo en un let
// utilico en este 
// cambio el valor de ese let

export default function CheckBoxAl(props) {
  const [checked, setChecked] = useState(props.item.check);
  let [config, setConfig] = useState();

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

  useEffect(() => {
    getJsonConfig().then((value) =>
      setConfig(value)
    );
  }, [])

  function actionPress() {
    getJsonConfig().then((value) => {
      setConfig(value);
      setChecked(!checked);
      props.item.check = !checked;
      for (var k = 0; k < config.length; k++) {
        if (config[k].id == props.item.id) {
          config[k].check = props.item.check;
        }
      }
      console.log(config)
      removeJsonConfig();
      setJsonConfig(config);
      props.navigation.pop();
    }
    );
  }

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="#80ced7"
      onPress={() => { actionPress() }}
    />
  )
}