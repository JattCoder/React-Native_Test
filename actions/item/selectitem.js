export const SELECT_ITEM = 'SELECT_ITEM'

export const Selectitem = (item) => {
    return (dispatch) => { {dispatch({type: SELECT_ITEM, payload: item})}}
}