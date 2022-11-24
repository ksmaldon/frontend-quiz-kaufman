import "./index.css";
import Button from "../Button";
import { useState } from "react";

//PLAN
//Created our branch
//Create a handle change function to get the data from the form
//onclickbutton with useState  that will send our post to the function
//have A edit and add button
//Create two function one for POST and PATCH

export default function Form() {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true)

  
  console.log(formData);

  function handleChangeForm(event) {
    const Question = event.target.form.Questions.value;
    const Answers = event.target.form.Answer.value;
   
    const Topics = event.target.form.topic.value;
   
    if(Question.length >0){
        setIsDisabled(false)
    }
    else{setIsDisabled(true)}
   
    setFormData({ question: Question, answer: Answers, topic_id: Topics });
    
  }

  async function addNewQuestion() {
    const response = await fetch(`/api/questions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    console.log("async function");
    // window.location.reload();
  }

  function submitNewQuestion(event) {
    // event.preventDefault();
    console.log(formData);
    addNewQuestion();
  }

  return (
    <div id="form-container">
      <h3>Add Questions</h3>
      <form onChange={handleChangeForm} className="form">
        <div className="input-field-container">
          <div className="input-field">
            <label>Question:</label>
            <textarea name="Questions"></textarea>
          </div>

          <div className="input-field">
            <label>Answer:</label>
            <textarea name="Answer"></textarea>
          </div>
          <div className="input-field">
            Topics:{" "}
            <select className="dropdown" name="topic" id="topic">
              <option value="1" >
                React
              </option>
              <option value="2" >
                HTML/CSS
              </option>
              <option value="3" >
                JavaScript
              </option>
              <option value="4" >
                SQL
              </option>
            </select>
          </div>
        </div>

        <div className="button-container">
          <button disabled={isDisabled} onClick={submitNewQuestion}>Add New Question</button>
          {/* <Button className="form-button" text="Edit"/>
                    <Button className="form-button" text="Update" /> */}
        </div>
      </form>
    </div>
  );
}
