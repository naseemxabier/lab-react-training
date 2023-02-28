function BoxColor(props) {
    let {r, g, b} = props;
    let divStyle = {
        border: '3px solid black',
        width: '75%',
        marginTop: '15px',
        backgroundColor: `rgb(${r} ${g} ${b})`,

    }
    return (
        <div style={divStyle}>
        <p>{r} {g} {b}</p>
        </div>
    )
}
export default BoxColor;