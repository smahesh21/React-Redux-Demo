import {combineReducers} from 'redux'
import  cakeReducer from './cake/cakeReducers'
import iceCreamReducer from './icecream/iceCreamReducers'
import  userReducer  from './users/userReducers'

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer,
    users : userReducer
})

export default rootReducer;