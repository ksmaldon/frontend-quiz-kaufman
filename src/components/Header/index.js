import './index.css'
import logo from "../images/quiz_kaufman_logo.png" 
export default function Header({title}) {

    return (
        <div className="header">
           <div className="logo">
         <img className="logo-image" src={logo} />
         </div>
           
     </div> 
    )
}