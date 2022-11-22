import Button from "../Button"

export default function Form() {

    return (
        <div>
            <form className="form">
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

                <div className="button-container">
                    <Button/>
                    <Button/>
                    <Button/>
                </div>                 
            </form>
         </div>

    )
}