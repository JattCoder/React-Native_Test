export const RESET_ITEMS = 'REMOVE_ITEMS'

const initialState = []

export const removeitems = () => {
    return (dispatch) => { 
        return (dispatch) => { {dispatch({type: RESET_ITEMS, payload: initialState})}}
    }
}