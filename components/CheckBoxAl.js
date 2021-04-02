import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export default function CheckBoxAl(props) {
  const [checked, setChecked] = React.useState(props.item.check);
  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color="#80ced7"
      onPress={() => {
        setChecked(!checked);
        props.item.check = !checked;
      }}
    />
  )
}