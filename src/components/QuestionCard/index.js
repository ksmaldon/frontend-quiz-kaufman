import Button from "../Button"
import { useState } from "react";
import './index.css'
export default function QuestionCard({question, answer}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
      };

    return(
    
        <div className='question-card'>
          <h4>Question</h4> 
          <Button text="Delete"/>
           <p>{question}</p>
           <h4>Answer</h4>
           <p className={isActive ? 'visible' : 'hidden'}>{answer}</p>
           {/* <Button text="Reveal Answer"/> */}
           <button  onClick={handleClick}>Reveal Answer</button>
        </div>
    )
}