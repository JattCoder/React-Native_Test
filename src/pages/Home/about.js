import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
export default (About = () => {
  // const { RNConfig1 } = NativeModules;
  //NativeModules.RNConfig1.getDeviceName((err, name) => console.log(err, name));
  return (
    <View style={Styles.Page}>
      <Text>Service Key: {NativeModules.RNConfig.ServiceKey}</Text>
    </View>
  );
});

const Styles = StyleSheet.create({
  Page: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#368B8E',
  },
});
