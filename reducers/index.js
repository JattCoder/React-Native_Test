import { combineReducers } from 'redux'
import item from './item'
import items from './items'
import method from './method'

const rootreducers =  combineReducers({
  method,items,item
})

export default rootreducers