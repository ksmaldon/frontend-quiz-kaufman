import './index.css'
import Button from "../Button"

export default function Form() {

    return (
        <div>
            <form className="form">
                <div className="input-field-container">
                    <label>Question:
                        <input></input>
                    </label>
                    
                    <label>Answer:
                        <input></input>
                    </label>

                    <label>Topic:
                        <input></input>
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