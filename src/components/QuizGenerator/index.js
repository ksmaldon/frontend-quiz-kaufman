import Button from "../Button"
import {  useState } from 'react'
export default function QuizGenerator ({fiveQuestions}) {
  const [topics, setTopics] = useState([])
  

  
    function handleCheckboxChange(e) {

      const  { value, checked } = e.target;
      console.log(`${value} is ${checked}`)

if(checked){
  setTopics([...topics, value]) }

else {
  setTopics(topics.filter((e) => e !== value))
}}

 

 
    return (
        <div className="quiz-generator">
          <form>
            <label> React
            <input  id="react" 
            name="topics" 
            value="react" 
            onChange={handleCheckboxChange} 
            type="checkbox"></input>
            </label>
            <label> HTML/CSS
            <input type="checkbox"
            id="HTML_CSS" 
            name="topics" 
            value="HTML_CSS" 
            onChange={handleCheckboxChange} 
           ></input>
            </label>
            <label> SQL
            <input id="SQL" 
            name="topics" 
            value="SQL" 
            onChange={handleCheckboxChange} 
            type="checkbox"></input>
            </label>
            <label> JS
            <input id="JS" 
            name="topics" 
            value="JS" 
            onChange={handleCheckboxChange} 
            type="checkbox"></input>
            </label>
            <button onClick={fiveQuestions}>Generate Quiz</button>
          </form>
          <div></div>
        </div>
        
    )
    }