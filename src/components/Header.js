import React from "react" 
import "./style.css"

class Header extends React.Component { 
    render(){
      return(
        <div>
            <div className = "container">
                <a href="#">Home</a>
                <a href="#" >Post Result</a>
                <a href="#">About</a>
                <img src= {require("./../img/aut_icpc2.png")} height="55" width = "170"/>
           
            </div>
            
         
        </div>
      )
    }
}

export default Header