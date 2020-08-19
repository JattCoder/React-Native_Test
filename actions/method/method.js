export const METHOD = 'METHOD'

export const method = (method) => {
    return (dispatch) => {
        return dispatch({type: METHOD, payload: method})
    }
}