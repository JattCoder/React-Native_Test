import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
export default (About = () => {
  // const { RNConfig1 } = NativeModules;
  //console.warn(NativeModules.RNConfig.getDeviceName((err, name) => console.log(err, name)))
  //console.warn(NativeModules.RNConfig.ServiceKey)
  return (
    <View style={Styles.Page}>
      <Text style={Styles.Text}>Service Key: {NativeModules.RNConfig.ServiceKey}</Text>
    </View>
  );
});

// NativeModules.RNConfig.ServiceKey

const Styles = StyleSheet.create({
  Page: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#368B8E',
  },
  Text:{
    fontSize:20,
    color:'white'
  }
});
