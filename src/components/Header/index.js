import './index.css'
import logo from "../images/quiz_kaufman_logo.png" 
export default function Header({title}) {

    return (
        <div className="header">
           <div className="logo"></div>
         <img src={logo} />
           <h1>{title}</h1>
     </div> 
    )
}