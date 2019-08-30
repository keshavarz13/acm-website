import React from "react" 
import "./styles/header-style.css"
import { NavLink } from 'react-router-dom'


class Header extends React.Component { 
    constructor() { 
      super() 
      this.state = { 
          display :1,
          style : {
            visibility: "hidden" 
          }
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler () { 
       if(this.state.display === 1){
          this.setState({
            display : 2 , 
            style : { 
              visibility: "visible"
            }
          })
          
        }
        else if(this.state.display === 2) { 
          this.setState({
            display : 1,
            style : {
              visibility: "hidden" 
            }
          })
        }
    }
    
    render() {
      return(
        <div>
            <div className = "container">
              <div className = "dobble-container">

                  <div className= "nav-link-container">
                      <a  className="nav-link" href="#">Time Line</a>
                      <a className="nav-link" href="#">Contact Us</a>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/PastResult">Past Result</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/Register">Register</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/">Home</NavLink>
                  </div>

                  <div className ="option">
                    <div class="dropdown">
                      <button class="dropbtn"><img src = {require("./../img/dropDown.svg")} width ="32" height ="32" onClick = {this.clickHandler}  />
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content" style ={this.state.style}>
                          <NavLink onClick={() => window.scrollTo(0, 0)}onClick = {this.clickHandler} className="nav-link" exact to="/">Home</NavLink>
                          <a className="nav-link" onClick = {this.clickHandler} href="#">Time Line</a>
                          <a className="nav-link" onClick = {this.clickHandler} href="#">Contact Us</a>
                          <NavLink onClick={() => window.scrollTo(0, 0)} onClick = {this.clickHandler} className="nav-link" exact to="/PastResult">Past Result</NavLink>
                          <NavLink onClick={() => window.scrollTo(0, 0)} onClick = {this.clickHandler} className="nav-link" exact to="/Register">Register</NavLink>
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