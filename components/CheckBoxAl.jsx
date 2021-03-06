import React, { useState, useEffect, useContext } from 'react';
import { Checkbox } from 'react-native-paper';

import { getJsonConfig, setJsonConfig, removeJsonConfig } from './DataStream';
import { ChangeContext } from './context/ChangeProvider';

export default function CheckBoxAl({ item, navigation }) {
/* -------------------------------- CONTEXTS -------------------------------- */

  const { setDidChange } = useContext(ChangeContext);

  /* --------------------------------- STATES --------------------------------- */

  const [checked, setChecked] = useState(item.check);
  const [config, setConfig] = useState();

  /* -------------------------------- FUNCTIONS ------------------------------- */

  function actionPress() {
    setDidChange(true);
    getJsonConfig('myData').then((value) => {
      setConfig(value, 'myData');
      setChecked(!checked);
      for (let k = 0; k < config.length; k++) {
        if (config[k].id === item.id) {
          config[k].check = !checked;
        }
      }
      removeJsonConfig('myData');
      setJsonConfig(config, 'myData');
      navigation.pop();
    });
  }

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    getJsonConfig('myData').then((value) => setConfig(value));
  }, []);
  /* --------------------------------- RETURN --------------------------------- */

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="#80ced7"
      onPress={() => actionPress()}
    />
  );
}
