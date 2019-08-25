import React from "react" 
import "./styles/header-style.css"
import { NavLink } from 'react-router-dom'


class Header extends React.Component { 
    render() {
      return(
        <div>
            <div className = "container">
              <div className = "dobble-container">

                  <div className= "nav-link-container">
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/">Home</NavLink>
                      <a  className="nav-link" href="#">Time Line</a>
                      <a className="nav-link" href="#">Contact Us</a>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/PastResult">Past Result</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/Register">Register</NavLink>
                  </div>

                  <div className ="option">
                    <div class="dropdown">
                      <button class="dropbtn"><img src = {require("./../img/dropDown.svg")} width ="32" height ="32"/>
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                          <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/">Home</NavLink>
                          <a className="nav-link" href="#">Time Line</a>
                          <a className="nav-link" href="#">Contact Us</a>
                          <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/PastResult">Past Result</NavLink>
                          <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/Register">Register</NavLink>
                      </div>
                    </div> 
                  </div>

                  <img src= {require("./../img/header-logo.png")} height="55" width = "190"/>
              </div>
            </div>
        </div>
      )
    }
}

export default Header