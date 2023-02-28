import Rating from './Rating'
function DriverCard (props) {
    let {name, rating, img, car} = props;
    let divStyle = {
        backgroundColor: 'lightBlue',
    }
    return (
        <div style ={divStyle} className = "block">
           <img className = "carnet" src={img} alt ="image"/> 
           <div className ="conducir">
           <p>{name}</p>
           <p><Rating>{rating}</Rating></p>
           <p>{car.model} - {car.licensePlate}</p>
           </div>
         
        </div>
    )
}
export default DriverCard;