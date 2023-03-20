import logo from '../logo.svg'
import {AnimationNumber} from "./AnimationNumber";

export function CriptoRow({amount, clxs}){
    return(
        <div className="CriptoRow">
            <img src={logo} className="CriptoRow-logo" alt="logo" />
            <CriptoAmount amount={amount} clxs={clxs}/>
        </div>
    )
}

function CriptoAmount({amount, clxs}){
    return(
        <div className="Amount">
            <p>R$</p>
            <AnimationNumber limit={amount} clxs={clxs}/>
        </div>
    )
}
