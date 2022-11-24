import Button from "../Button"
import { useState } from "react";
import './index.css'
export default function QuestionCard({questionNumber,question, answer, deleteQuestion, questionId}) {
    const [isActive, setIsActive] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [buttonText, setButtonText] = useState('Reveal Answer')
    
    const handleClick = event => {
        setIsActive(current => !current);
        if (buttonText==='Reveal Answer'){
          setButtonText('Hide Answer')
        }
        if (buttonText==='Hide Answer'){
          setButtonText('Reveal Answer')
        }
      };

      

      const handleClickDelete = event => {
          setIsDeleted(current => !current);
        };

    return(
    
        <div id='question-card'className={isDeleted ? 'hidden' : 'visible'}>
          <div id="question-header">
            <h4>Question {questionNumber}</h4> 
            <div id="crud-btn-container">
              <button>Edit</button>
              <button className="delete-btn" onClick={() => {deleteQuestion(questionId); handleClickDelete()}} text="Delete">Delete</button>
            
            </div>
          </div>
           <p className="question-text">{question}</p>
           {/* <h4>Answer</h4> */}
           <p id={'answer-text'} className={isActive ? 'visible' : 'hidden'}>{answer}</p>
           <h4 className={isActive ? 'visible' : 'hidden'}>Resources</h4>
           {/* <Button text="Reveal Answer"/> */}
           <button  onClick={handleClick}>{buttonText}</button>
           

        </div>
    )
}