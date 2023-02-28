function  Greetings (props) {
    let {lang, children}= props;
    let greeting = ""
    if (lang === "de") {greeting = "Hallo"}
    if (lang === "fr") {greeting = "Bonjour"}
    if (lang === "en") {greeting ="Hello"}
    if (lang === "es") {greeting ="Hola"}
    
    return (
        <div className = "saludo">
            <p>{greeting} {children}</p>
        </div>
    )
}
export default Greetings;