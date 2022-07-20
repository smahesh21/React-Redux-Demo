import { useState } from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux"

const NewCakeContainer = (props) => {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes={props.numOfCakes} usin Action Payload</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake:(number)=> dispatch(buyCake(number))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(NewCakeContainer);