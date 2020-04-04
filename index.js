import {NativeModules, Platform, NativeEventEmitter} from 'react-native';
let RNConvertPhAsset = {};



if (Platform.OS === 'ios') {
  RNConvertPhAsset = NativeModules.RNConvertPhAsset;
  RNConvertPhAsset.convertVideoFromUrl = map => {
    map.id = map.url.substring (5, 41);
    return RNConvertPhAsset.convertVideoFromId (map);
  };

  const assetMediaManagerEmitter = new NativeEventEmitter(RNConvertPhAsset);

  RNConvertPhAsset.registerToEvent = (eventName, handler) => {
    return assetMediaManagerEmitter(eventName, handler);
  }
}

export default RNConvertPhAsset;
