import logoVisa from '../assets/images/visa.png'
import logoMaster from '../assets/images/master-card.svg'
function CreditCard (props) {
    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    let numbers = number.slice(-4)
    let year = expirationYear.toString().slice(-2)
    let divStyle = {
        backgroundColor: bgColor,
        color: color,

    }
    return (

        <div style={divStyle} className ="card">
        {(type === "Visa") && <img className = "logo" src = {logoVisa} alt ="Visa"/>}
        {(type === "Master Card") && <img className = "logo" src = {logoMaster} alt ="Visa"/>}
        <p> **** **** **** {numbers}</p> 
        <p>Expires {expirationMonth}/{year}  {bank}</p>
        <p>{owner}</p>

        </div>
    )
}
export default CreditCard;