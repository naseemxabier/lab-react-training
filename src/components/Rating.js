function Rating(props) {
    let { children } = props;
    let number = Math.round(children)
    
    return (
        <p>
            {number === 0 && <p>☆☆☆☆☆</p>}
            {number === 1 && <p>★☆☆☆☆</p>}
            {number === 2 && <p>★★☆☆☆</p>}
            {number === 3 && <p>★★★☆☆</p>}
            {number === 4 && <p>★★★★☆</p>}
            {number === 5 && <p>★★★★★</p>}

        </p>
    )
}
export default Rating;