import React,{useEffect} from 'react'
import { items } from '../../../actions/items/getitems'
import {connect,useDispatch} from 'react-redux'

class Data extends React.Component{
    
    item = (props) => {
        const dispatch = useDispatch()
        if(props.method.method == 'File'){
            console.warn('File')
            return require('../../../assets/products.json')
        }else{
            console.warn('API')
            if(props.items.length == 0){
                dispatch(items())
            }
        }
        if(props.items.length != 0) return props.items
    }

}

const mapStateToProps = (state) => ({
    items: state.items
})

const conn = connect(mapStateToProps, null)(Data)

export default conn