import React from 'react';
import { ActivityIndicator, View } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

import ProductCard from '../components/ProductCard';
// import OfflineCard from '../components/OfflineCard';
import useFetch from '../components/CustomHooks';

export default function ProductScreen({ route, navigation }) {
  // const { offlineData } = useContext(DataContext);
  const { barCode, config } = route.params;
  // const [offline, setOffline] = useState(false);
  const url = `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`;
  const { response, loading } = useFetch(url);

  // NetInfo.fetch().then((state) => {
  //   !state.isConnected
  //   || !state.isInternetReachable
  //   || state.details.cellularGeneration === '2g'
  //   || state.type === null
  //     ? setOffline(true)
  //     : setOffline(false);
  // });

  function renderCard() {
    // const result = offlineData.filter((e) => e.code === barCode);
    // console.log(result);
    // console.log(offlineData[1]);
    // if (!offline) {
    return (
      <ProductCard data={response} config={config} navigation={navigation} />
    );
    // }
    // console.log(result);
    // return (
    //   <OfflineCard data={response} config={config} navigation={navigation} />
    // );
  }

  // if (!isConnected || type= 2g || type=null) {
  //   const dataFile = require('../../config.json');
  //   const response =
  // } else{

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? <ActivityIndicator size={70} color="#9ad1d4" /> : renderCard()}
    </View>
  );
}
