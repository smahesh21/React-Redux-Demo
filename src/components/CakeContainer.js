import { connect } from "react-redux"
import { buyCake } from "../redux"

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes={props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyCake:()=> dispatch(buyCake())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CakeContainer);