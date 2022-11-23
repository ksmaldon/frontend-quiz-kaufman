export default function Button({className, text, fiveQuestions}) {

    return (
       <button onClick = {fiveQuestions}  className={className}>{text}</button>
    )
}