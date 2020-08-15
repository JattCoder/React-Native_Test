import React,{ useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Animated, Easing } from 'react-native';

const Info = () => {
  const[screen1,setscreen1] = useState(true)
  const[screen2,setscreen2] = useState(false)
  const[screen3,setscreen3] = useState(false)
  const[sonefade,setonefade] = useState(1)
  const[timer,resettimer] = useState(2000)

  let scaleValue = new Animated.Value(0);
  let fadeValue = new Animated.Value(1)
  const textScale = scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2]
  });
  let zoom = { transform: [{ scale: textScale }] };

  setTimeout(()=>{
    if(screen1 == true){
      Animated.timing(scaleValue, {
        toValue: 14,
        duration: 350,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      setTimeout(()=>{
        setscreen1(false)
        setscreen2(true)
        resettimer(2000)
      },350)
    }else if(screen2 == true){
      Animated.timing(scaleValue, {
        toValue: 14,
        duration: 350,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      setTimeout(()=>{
        setscreen2(false)
        setscreen3(true)
        resettimer(2000)
      },350)
    }else if(screen3 == true){
      Animated.timing(scaleValue, {
        toValue: -2,
        duration: 350,
        easing: Easing.linear,
        useNativeDriver: true
      }).start();
      setTimeout(()=>{
        setscreen3(false)
        setscreen1(true)
        resettimer(2000)
      },350)
    }
  },timer)

  return(
    <View style={Styles.Page}>
        {screen1 == true ? <Animated.View style={zoom}><Text style={{color:'white',fontSize:30}}>Welcome</Text></Animated.View> : null}
        {screen2 == true ? <Animated.View style={zoom}><Text style={{color:'white',fontSize:30}}>To</Text></Animated.View> : null}
        {screen3 == true ? 
          <Animated.View style={zoom}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'white',fontSize:30}}>Harmandeep Mand</Text>
              <TouchableOpacity style={{borderWidth:1,width:300,borderColor:'white'}}/>
              <Text style={{fontSize:25, color:'white'}}>React Native Test App</Text>
            </View>
          </Animated.View> : null}
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
  }
})

export default Info;
