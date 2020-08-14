import React from 'react';
import { SafeAreaView, Text, Linking, StyleSheet } from 'react-native';

const Info = () => (
  <SafeAreaView style={Styles.Page}>
    <Text>Harmandeep Mand Repo</Text>
  </SafeAreaView>
);

const Styles = StyleSheet.create({
  Page: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
});

export default Info;
