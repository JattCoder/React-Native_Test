import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
import { Switch } from 'react-native-switch';
import { useDispatch, useSelector } from 'react-redux'
import { method } from '../../../actions/method/method'
import { items } from '../../../actions/items/getitems'
export default (About = () => {
  // const { RNConfig1 } = NativeModules;
  //console.warn(NativeModules.RNConfig.getDeviceName((err, name) => console.log(err, name)))
  //console.warn(NativeModules.RNConfig.ServiceKey)
  const [meth,changemethod] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(method(meth))
  })
  changeMethod = () => {
    changemethod(!meth)
    dispatch(method(meth))
  }
  return (
    <View style={Styles.Page}>
      {NativeModules.RNConfig.ServiceKey ? 
      <Text style={Styles.Text}>Service Key: {NativeModules.RNConfig.ServiceKey}</Text> : <Text style={Styles.Text}>Failed to retrieve Service Key</Text>}
      <Text style={{color:'white',fontSize:15,marginTop:'10%',marginBottom:5}}>Retrieve Data Using</Text>
        <Switch
          value={meth}
          onValueChange={(value) => changeMethod()}
          activeText={'File'}
          inActiveText={'API'}/>
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
