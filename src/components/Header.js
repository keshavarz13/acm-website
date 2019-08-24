import React from "react" 
import "./styles/header-style.css"

class Header extends React.Component { 
    render() {
      return(
        <div>
            <div className = "container">
              <div className = "dobble-container">

                  <div className= "nav-link-container">
                      <a className="nav-link" href="#" onClick = {()=>{
                        this.props.changePage(1)
                    
                      }}>Home</a>
                      <a className="nav-link" href="#">Time Line</a>
                      <a className="nav-link" href="#">Contact Us</a>
                      <a className="nav-link" href="#" >Past Result</a>
                      <div className="register-container"><a className="register" href="#">Register</a></div>
                  </div>

                  <div className ="option">
                    <div class="dropdown">
                      <button class="dropbtn"><img src = {require("./../img/dropDown.svg")} width ="32" height ="32"/>
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">Home</a>
                        <a href="#">Time Line</a>
                        <a href="#">Contact Us</a>
                        <a href="#" >Past Result</a>
                      </div>
                    </div> 
                  </div>

                  <img src= {require("./../img/header-logo.png")} height="55" width = "170"/>
              </div>
            </div>
        </div>
      )
    }
}

export default Header