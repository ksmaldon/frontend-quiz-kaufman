import Button from "../Button"
export default function QuestionCard({question, answer}) {

    return(
        <div className='question-card'>
          <h4>Question</h4> 
          <Button text="Delete"/>
           <p className="question">{question}</p>
           <h4>Answer</h4>
           <p className="answer">{answer}</p>
           <Button text="Reveal Answer"/>
        </div>
    )
}