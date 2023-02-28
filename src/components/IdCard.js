function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
    return (
        <div>
            <div className="bloque">
            
                <p> <img className="imagen" src={picture} alt="imagen" /></p>
                <div className="persona">
                    <p><strong>Last Name:</strong>{lastName}</p>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Gender:</strong>{gender}</p>
                    <p><strong>Height:</strong>{height}</p>
                    <p><strong>Birth: </strong>{birth.toDateString()}</p>
                </div>

            </div>
        </div>
    )
}
export default IdCard;