import { SELECT_ITEM } from '../actions/item/selectitem'
import { RESET_ITEM } from '../actions/item/resetitem'

let initialState = {
    id: "",
    name: "",
    image: "",
    short_description: "",
    description: "",
    price: "",
    discount: null,
    discount_type: null,
    order: "",
    category: ""
  }

const reducer = (selecteditem = initialState, action) => {
    switch(action.type){
        case SELECT_ITEM:
            return { ...selecteditem, ...action.payload }
        case RESET_ITEM:
            return { ...selecteditem, ...action.payload }
        default:
            return selecteditem
    }
}

export default reducer