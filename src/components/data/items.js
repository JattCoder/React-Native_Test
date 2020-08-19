import React,{useEffect} from 'react'
import { items } from '../../../actions/items/getitems'
import { file } from '../../../actions/items/fromfile'
import {useSelector,useDispatch} from 'react-redux'

export default Items = () => {
    const dispatch = useDispatch()
    useSelector((props)=>{
        if(props.method.method == 'File'){
            data = require('../../../assets/products.json')
            return data
        }else{
            if(props.items.length == 0){
                dispatch(items())
            }else{
                return props.items
            }
        }
    })
}
