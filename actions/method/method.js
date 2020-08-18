export const METHOD = 'METHOD'

export const method = (meth) => {
    if (meth == true) selection = 'File'
    else selection = 'API'
    return async (dispatch) => { dispatch({type: METHOD, payload: selection})
    }
}