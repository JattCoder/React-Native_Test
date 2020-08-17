import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Selectitem} from '../../../actions/item/selectitem'
import { ResetItem } from '../../../actions/item/resetitem'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Animated, Easing } from 'react-native'
import Card from '../../components/Product'

export default Market = (props) => {
    const [category,setcategory] = useState('')
    const [anim,setanim] = useState('')
    const dispatch = useDispatch()
    let data = require('../../../assets/products.json');
    const arr = []

    let scaleValue = new Animated.Value(0);

    const cardScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1.2]
    });

    let transformStyle = { transform: [{ scale: cardScale }] };

    sort = (object1, object2) => {
        if(object1.order <= object2.order) return true
        else return false
    }

    sortedArrOfObjects = () => {
        for(p = 0; p < data.length; p++){
            for(i = 0; i < data.length; i++){
                if((i+1) < data.length){
                    if (sort(data[i],data[i+1]) == false){
                        backup = data[i]
                        data[i] = data[i+1]
                        data[i+1] = backup
                    }
                }
            }
        }
    }

    sortedArrOfObjects()

    check = (category) => {
        if(arr.includes(category)) return false
        else {
            arr.push(category)
            return true
        }
    }

    selectCard = (item) => {
        dispatch(Selectitem(item))
    }

    useSelector((state)=>{
        if(state.item.name != '') props.navigation.navigate('Details')
    })

    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'#FF7133'}}>
            <View style={Styles.Page}>
                {category == '' ? <View style={{justifyContent:'center',alignItems:'center',height:'80%',width:'100%'}}>
                    <Text style={{fontSize:23, color:'white'}}>Categories</Text>
                    {data.filter((Item)=>{return check(Item.category) }).map((item)=>{
                        return(
                            <View key={item.id}>
                                <TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setcategory(item.category)} style={Styles.Catogory}>
                                        <Text style={{color:'white'}}>{item.category}</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View> : <View>
                        <View>
                            <TouchableOpacity onPress={()=>setcategory('')} style={{marginLeft:'5%',flexDirection:'row'}}>
                                <Text style={{fontSize:18,color:'#002366'}}>{`< `}</Text>
                                <Text style={{color:'#002366', fontSize:20}}>{category}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                            <ScrollView style={{width:'100%'}}>
                                <View>
                                    {data.map((item)=>{
                                        return(
                                            item.category == category ?
                                                <TouchableOpacity key={item.id} activeOpacity={1} onPress={()=>selectCard(item)}
                                                onPressIn={() => {
                                                    scaleValue.setValue(0);
                                                    Animated.timing(scaleValue, {
                                                        toValue: 0.5,
                                                        duration: 250,
                                                        easing: Easing.linear,
                                                        useNativeDriver: true
                                                    }).start();
                                                }}
                                                onPressOut={() => {
                                                    Animated.timing(scaleValue, {
                                                        toValue: 0,
                                                        duration: 100,
                                                        easing: Easing.linear,
                                                        useNativeDriver: true
                                                    }).start();
                                                    }}
                                                >
                                                <Animated.View key={item.id} style={transformStyle}>
                                                    <Card key={item.id} item={item} selection={category}/>
                                                </Animated.View>
                                                </TouchableOpacity>: null
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                </View>}
            </View>
        </View>
    )
};

const Styles = StyleSheet.create({
    Page:{
        marginTop:'12%',
        width:'100%',
    },
    card:{
        borderRadius:15
    },
    Button:{
        color:'black',
        marginTop:100,
        zIndex:10
    },
    Catogory:{
        marginTop:20,
        borderRadius:25,
        width:350,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#368B8E',
        borderWidth:0.5,
        shadowOpacity:50,
        shadowColor:'white'
    }
})