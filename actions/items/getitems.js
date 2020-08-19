export const ITEMS = 'ITEMS'

export const items = () => {
    return async (dispatch) => { 
        return await fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(data => {dispatch({type: ITEMS, payload: data})})
        .catch(err => console.log(err))
    }
}