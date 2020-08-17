import React,{ useState } from 'react'
import { View, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native'
import Infobar from './infobar'

export default Product = (props) => {
    const[imgload,setimgload] = useState(false)
    
    return(
        <View style={Styles.Card}>
            {imgload == false ? <ActivityIndicator size='small'/> : null }
            <ImageBackground style={Styles.Image} imageStyle={{borderRadius:10}} onLoad={()=>setimgload(true)} source={{uri: props.item.image}}>
                <Infobar item={props.item}/>
            </ImageBackground>
        </View>
    )
};

const Styles = StyleSheet.create({
    Card:{
        alignItems:'center',
        marginLeft:30,
        height:220,
        width:350,
        marginTop:20,
        shadowOpacity:50,
        shadowColor:'white'
    },
    Image:{
        height:'100%',
        width:'100%',
    },
})
