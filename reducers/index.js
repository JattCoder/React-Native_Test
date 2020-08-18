import { combineReducers } from 'redux'
import item from './item'
import items from './items'
import method from './method'

const rootreducers =  combineReducers({
  item,items,method
})

export default rootreducers