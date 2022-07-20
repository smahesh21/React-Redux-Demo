import { connect } from "react-redux"
import { buyCake, buyIceCream } from "../redux"
const ItemsContainer = (props) => {
    return (
        <div>
            <h1>Items - {props.item} </h1>
            <button onClick={props.buyItem}>But Item</button>
        </div>
    )
}

const mapStatetoProps = (state,ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchtoProps = (dispatch,ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : ()=>dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ItemsContainer)