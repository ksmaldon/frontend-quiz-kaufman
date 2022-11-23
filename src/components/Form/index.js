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
    const [formData, setFormData]= useState({Questions:"",Answer:"",Topic:""})

    function handleChangeForm(event) {
        const Question = event.target.form.Questions.value
        const Answers = event.target.form.Answer.value
        const Topics = event.target.form.Topic.value

        setFormData({Questions:Question,Answer:Answers,Topic:Topics})
        console.log(formData)

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
                    <Button className="form-button" text="Edit"/>
                    <Button className="form-button" text="Update" />
                    
                </div>                 
            </form>
         </div>

    )
}