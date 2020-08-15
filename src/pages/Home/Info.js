import React,{ useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Info = () => {
  const[screen1,setscreen1] = useState(true)
  const[screen2,setscreen2] = useState(false)
  const[screen3,setscreen3] = useState(false)
  const[timer,resettimer] = useState(2000)

  setTimeout(()=>{
    if(screen1 == true){
      setscreen1(false)
      setscreen2(true)
      resettimer(2000)
    }else if(screen2 == true){
      setscreen2(false)
      setscreen3(true)
      resettimer(2000)
    }else if(screen3 == true){
      setscreen3(false)
      setscreen1(true)
      resettimer(2000)
    }
  },timer)

  return(
    <View style={Styles.Page}>
        {screen1 == true ? <Text style={Styles.Text}>Welcome</Text> : null}
        {screen2 == true ? <Text style={Styles.Text}>To</Text> : null}
        {screen3 == true ? <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={Styles.Text}>Harmandeep Mand</Text>
          <TouchableOpacity style={{borderWidth:1,width:300,borderColor:'white'}}/>
          <Text style={{fontSize:25, color:'white'}}>React Native Test App</Text>
        </View> : null}
    </View>
  )
}

const Styles = StyleSheet.create({
  Page: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5810d8'
  },
  Text:{
    color:'white',
    fontSize:30
  }
})

export default Info;
