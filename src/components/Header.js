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
                <img src= "http://icpc.aut.ac.ir/img/aut_icpc.png" height="50" width = "90"/>
            </div>
        </div>
      )
    }
}

export default Header