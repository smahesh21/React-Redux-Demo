import { connect } from "react-redux"
import { buyIceCream } from "../redux"

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyIceCream:()=> dispatch(buyIceCream())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(IceCreamContainer);