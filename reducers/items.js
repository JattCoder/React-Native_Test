import { ITEMS } from '../actions/items/getitems'

const reducer = (items = [], action) => {
    switch(action.type){
        case ITEMS:
            return { ...items, ...action.payload }
        default:
            return items
    }
}

export default reducer