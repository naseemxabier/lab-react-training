function Random(props) {
    let { min, max } = props;
    let value = Math.floor(props.min + Math.random() * props.max)
    return (
        <div className="random">
            <p>Random value between {min} and {max} => {value}</p>
        </div>
    )
}
export default Random;