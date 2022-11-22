import Button from "../Button"
export default function QuestionCard() {

    return(
        <div className='question-card'>
          <h4>Question</h4> 
          <Button text="Delete"/>
           <p>placeholder</p>
           <h4>Answer</h4>
           <p>placeholder</p>
           <Button text="Reveal Answer"/>
        </div>
    )
}