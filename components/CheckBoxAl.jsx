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
    getJsonConfig().then((value) => {
      setConfig(value);
      setChecked(!checked);
      // item.check = !checked; si sigue todo bien borrar
      for (let k = 0; k < config.length; k++) {
        if (config[k].id === item.id) {
          config[k].check = !checked;
        }
      }
      removeJsonConfig();
      setJsonConfig(config);
      navigation.pop();
    });
  }

  /* --------------------------------- EFFECTS -------------------------------- */

  useEffect(() => {
    getJsonConfig().then((value) => setConfig(value));
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
