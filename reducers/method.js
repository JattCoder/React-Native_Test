import { METHOD } from '../actions/method/method'

const method = (method = false, action) => {
    switch(action.type){
        case METHOD:
            return action.payload
        default:
            return method
    }
}

export default method