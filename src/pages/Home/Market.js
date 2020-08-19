import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Selectitem } from '../../../actions/item/selectitem'
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Animated, Easing } from 'react-native'
import Card from '../../components/Product'

export default Market = (props) => {
    const [category,setcategory] = useState('')
    const [received,setreceived] = useState('')
    const [sorted,setsorted] = useState([])
    const [method,setmethod] = useState('')
    const dispatch = useDispatch()
    const arr = []
    let data = []
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

    sortedArrOfObjects = (method) => {
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
        setreceived(method)
        setsorted(data)
    }

    check = (category) => {
        console.log('Incomming Category...',category)
        console.log('Length of arr....',arr.length)
        if(arr.includes(category)) return false
        else {
            arr.push(category)
            return true
        }
    }

    useSelector((state)=>{
        if(state.item.name != ''){
            props.navigation.navigate('Details')
        }else{
            if(state.method == true && received == 'File'){
                data = state.items
                console.warn('State Items Length... ',state.items.length)
                if(data.length == 0){
                    sortedArrOfObjects('')
                }else{
                    sortedArrOfObjects('API')
                }
            }else if(state.method == false && (received == 'API' || received == '')){
                data = require('../../../assets/products.json')
                console.warn('File')
                console.warn(data)
                sortedArrOfObjects('File')
            }
            // if(received == 'File'){
            //     console.warn('Using API')
            //     data = state.items
            //     sortedArrOfObjects('API')
            // }else if(received == 'API'){
            //     console.warn('Using File')
            //     data = require('../../../assets/products.json')
            //     sortedArrOfObjects('File')
            // }else if(received == ''){
            //     data = require('../../../assets/products.json')
            // }
        }
        // if(state.items != 0){
        //     data = state.items
        //     console.warn('API being Used')
        // }else{
        //     data = require('../../../assets/products.json')
        //     if(data == null)console.warn('File does not exist or Corrupted Data')
        //     else console.warn('File being Used')
        // }
    })

    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'#FF7133'}}>
            {received != '' ? <View style={Styles.Page}>
                {category == '' ? <View style={{justifyContent:'center',alignItems:'center',height:'80%',width:'100%'}}>
                    <Text style={{fontSize:23, color:'white'}}>Categories</Text>
                    {sorted.filter((Item)=>{return check(Item.category) }).map((item)=>{
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
                                    {sorted.map((item)=>{
                                        return(
                                            item.category == category ?
                                                <TouchableOpacity key={item.id} activeOpacity={1} onPress={()=>dispatch(Selectitem(item))}
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
            </View> : <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:20}}>No Data</Text>
            </View>}
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