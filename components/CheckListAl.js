import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { fonts } from "../styles/fonts"

let data = require('../config.json');

export default function CheckListAl() {
  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={{ flex: 1, flexDirection: 'column', marginTop: 30 }}>
        {
          data.map((item) => 
            <View key={item.id} style={{ flexDirection: 'row', paddingTop: 10}}>
              <Checkbox
                status={item.check ? "0" : "1"}
                color="#80ced7"
                onPress={() => {
                  item.check = !item.check;
                }}
              />
              <View style={{ justifyContent: 'center', textAlign: 'center' }}>
                <Text style={fonts.blackFont}> {item.name}</Text>
              </View>
            </View>
          )
          }
      </ScrollView>
  
  );
}

