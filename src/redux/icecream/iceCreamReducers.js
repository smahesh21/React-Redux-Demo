import { BUY_ICECREAM } from "./iceCreamType";

const initailState = {
    numOfIceCreams: 50
}

 const iceCreamReducer = (state=initailState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams - 1
            }
            default:
                return state
    }
}

export default iceCreamReducer