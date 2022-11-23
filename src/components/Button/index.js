export default function Button({className, text, allOnClick}) {

    return (
       <button onClick={allOnClick} className={className}>{text}</button>
    )
}