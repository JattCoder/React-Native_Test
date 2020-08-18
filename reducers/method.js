import { METHOD } from '../actions/method/method'

const reducer = (method = 'File', action) => {
    switch(action.type){
        case METHOD:
            return { method, method: action.payload }
        default:
            return method
    }
}

export default reducer