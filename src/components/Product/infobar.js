import React,{ useEffect, useState} from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default Infobar = (props) => {

    const[img,imgs] = useState(
        [require('../../avatars/one.jpeg'),
          require('../../avatars/two.jpg'),
          require('../../avatars/three.jpg')])
    const[free,setfree] = useState(false)
    const[price,setprice] = useState(0)
    useEffect(()=>{
        let discount;
        if(props.item.discount_type == 'percentage'){
            discount = props.item.price*(props.item.discount/100)
            discount == 0 ? setfree(true) : setprice(props.price-discount)
        }
        setprice(props.item.price - props.item.discount)
        if((props.item.price - props.item.discount) == 0) setfree(true)
    })

    return(
        <View style={Styles.bar}>
            <View style={{flexDirection:'row'}}>
            <View >
                <Text style={Styles.Text}>{props.item.name}</Text>
            </View>
            <View>
                <Image style={{height:20,width:20,borderRadius:25}} source={img[Math.random() * (img.lengh-1)]}/>
            </View>
            </View>
            {free == false ? <Text style={Styles.Text}>{'\u00A3 '+(price/100).toFixed(2)}</Text>:<Text style={Styles.Text}>FREE</Text>}
            <Text style={Styles.Desc}>{props.item.short_description}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    Text:{
        color:'white',
        fontSize:12,
        padding:2,
        fontWeight:'bold'
    },
    Desc:{
        color:'white',
        fontSize:10,
        padding:2
    },
    bar:{
        backgroundColor:'black',
        height:'43%',
        width:'100%',
        position:"absolute",
        bottom:0,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'rgba(105, 105, 105, 0.81)'
    }
})