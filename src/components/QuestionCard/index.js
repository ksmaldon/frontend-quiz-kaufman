import Button from "../Button"
import { useState } from "react";
import './index.css'
export default function QuestionCard({questionNumber,question, answer, deleteQuestion, questionId, text_link, video_link,interactive_link}) {
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
        
           <h4 className={isActive ? 'visible' : 'hidden'}>Resource Links:</h4>

          <div className="resource-button-container">

           <a className={isActive ? 'visible' : 'hidden'} href={text_link}>
       
          <button className="resource-button">Article</button>
          </a> 
          <a className={isActive ? 'visible' : 'hidden'} href={video_link}>
          <button className="resource-button">Video</button>
          </a> 
          <a className={isActive ? 'visible' : 'hidden'} href={interactive_link}>
          <button className="resource-button">Practice!</button>
          </a> 
          </div>
         
           
           {/* <Button text="Reveal Answer"/> */}
           <button  onClick={handleClick}>{buttonText}</button>
           

        </div>
    )
}