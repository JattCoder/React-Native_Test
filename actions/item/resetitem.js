export const RESET_ITEM = 'RESET_ITEM'

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

export const resetitem = () => {
    return (dispatch) => { {dispatch({type: RESET_ITEM, payload: initialState})}}
}