import './index.css'
import Button from "../Button"

export default function Form() {

    return (
        <div>
            <form className="form">
                <div className="input-field-container">
                    <label>Query0
                        <input></input>
                    </label>
                    
                    <label>Query1
                        <input></input>
                    </label>

                    <label>Query2
                        <input></input>
                    </label>   
                    <label>Query3
                        <input></input>
                    </label> 
                </div>
                

                <div className="button-container">
                    <Button className="form-button"/>
                    <Button/>
                    <Button/>
                </div>                 
            </form>
         </div>

    )
}