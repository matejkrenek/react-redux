import { connect } from "react-redux"
import { buyMilkShake } from "../redux";

const MilkShakeContainer = (props) => {
    return ( 
        <div>
            <h2>Number of milk shakes - {props.numOfMilkShakes}</h2>
            <button onClick={props.buyMilkShake}>Buy milk shake</button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        numOfMilkShakes: state.milkShake.numOfMilkShakes
    }
}

const mapDispatchToProps = dispatch => {
    return {  
        buyMilkShake: () => dispatch(buyMilkShake())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MilkShakeContainer);