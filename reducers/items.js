import { ITEMS } from '../actions/items/getitems'

const clear = []

const items = (items = [], action) => {
    switch(action.type){
        case ITEMS:
            return action.payload
        default:
            return items
    }
}

export default items