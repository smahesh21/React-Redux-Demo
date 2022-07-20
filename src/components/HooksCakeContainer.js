import { useSelector,useDispatch } from "react-redux"
import { buyCake } from "../redux"
const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of Cakes - {numOfCakes} using Hooks </h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer