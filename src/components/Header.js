import React from "react" 
import "./styles/header-style.css"

class Header extends React.Component { 
    render(){
      return(
        <div>
            <div className = "container">
              <div className= "nav-link-container">
                 <a className="nav-link" href="#">Home</a>
                 <a className="nav-link" href="#" >Past Result</a>
                 <div className="register-container"><a className="register" href="#">Register</a></div>
              </div>

                <img src= {require("./../img/aut_icpc2.png")} height="55" width = "170"/>
           
            </div>
            
         
        </div>
      )
    }
}

export default Header