import './index.css'
import Button from "../Button"
import { useState } from 'react'

//PLAN
//Created our branch 
//Create a handle change function to get the data from the form 
//onclickbutton with useState  that will send our post to the function 
//have A edit and add button
//Create two function one for POST and PATCH


export default function Form() {
    const [formData, setFormData]= useState({})





    function handleChangeForm(event) {
        const Question = event.target.form.Questions.value
        const Answers = event.target.form.Answer.value
        const Topics = event.target.form.Topic.value

        setFormData({Question,Answers,Topics})
        console.log(formData)

    }



    async function addNewQuestion() {
        
        const response = await fetch(`$/api/questions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
        console.log("async function")
      }



    function submitNewQuestion (event){
        event.preventDefault()
        console.log(formData)
        addNewQuestion()
    }



    return (
        <div>
            <form onChange={handleChangeForm} className="form">
                <div className="input-field-container">
                    <label>Question:
                        <input name="Questions"></input>
                    </label>
                    
                    <label>Answer:
                        <input  name="Answer" ></input>
                    </label>

                    <label>Topic:
                        <input  name="Topic"></input>
                    </label>   
                </div>
                

                <div className="button-container">
                    <button onClick={submitNewQuestion}>Add Question</button>
                    <Button className="form-button" text="Edit"/>
                    <Button className="form-button" text="Update" />
                    
                </div>                 
            </form>
         </div>

    )
}