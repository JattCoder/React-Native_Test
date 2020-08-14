import React,{ useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { resetitem } from '../../../actions/item/resetitem'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'

const ItemDetails = (props) => {

    const[free,setfree] = useState(false)
    const[price,setprice] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
        let discount;
        if(props.item.discount_type == 'percentage'){
            discount = props.item.price*(props.item.discount/100)
            discount == 0 ? setfree(true) : setprice(props.price-discount)
        }
        setprice(props.item.price - props.item.discount)
        if((props.item.price - props.item.discount) == 0) setfree(true)
    })

    close = () => {
        props.navigation.navigate('Home')
        dispatch(resetitem())
    }

    return(
        <View style={Style.Page}>
            <ImageBackground style={Style.Image} borderBottomRightRadius={50} source={{uri: props.item.image}}>
                <Text onPress={()=>close()} style={{marginTop:'13%',marginLeft:'10%',fontSize:20}}>{`X`}</Text>
            </ImageBackground>
            <Text style={{fontSize:20, marginLeft: 10, marginTop:-190}}>{props.item.name}</Text>
            {free == false ? <Text style={Style.Text}>{'\u00A3 '+(price/100).toFixed(2)}</Text>:<Text style={Style.Text}>FREE</Text>}
            <ScrollView><Text style={{fontSize:15, margin:20, padding:5}}>{props.item.description}</Text></ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    item: state.item
})

const item = connect(mapStateToProps, null)(ItemDetails)

export default item

const Style = StyleSheet.create({
    Page:{
        height:'100%',
        width:'100%',
        alignItems:'center'
    },
    Image:{
        width:'100%',
        height:'55%',
        borderBottomRightRadius:50,
    },
    Text:{
        fontSize:20,
        marginLeft: 10, 
        marginTop:10
    }
})