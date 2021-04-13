import React, { useState, useEffect, useContext } from "react";
import { Checkbox } from "react-native-paper";

import { getJsonConfig, setJsonConfig, removeJsonConfig } from "./DataStream";
import { ChangeContext } from "./ChangeProvider";


export default function CheckBoxAl(props) {
  const [checked, setChecked] = useState(props.item.check);
  const [config, setConfig] = useState();

  const { setDidChange, didChange } = useContext(ChangeContext);

  useEffect(() => {
    getJsonConfig().then((value) => setConfig(value));
  }, [])

  function actionPress() {
    console.log(`tiene que estar false: ${didChange}`);
    setDidChange(true);
    console.log(`tiene que estar true: ${didChange}`);
    getJsonConfig().then((value) => {
      setConfig(value);
      setChecked(!checked);
      props.item.check = !checked;
      for (var k = 0; k < config.length; k++) {
        if (config[k].id == props.item.id) {
          config[k].check = props.item.check;
        }
      }
      removeJsonConfig();
      setJsonConfig(config);
      props.navigation.pop();
    }
    );
  }

  return (
    <Checkbox
      status={checked ? "checked" : "unchecked"}
      color="#80ced7"
      onPress={() => actionPress()}
    />
  )
}