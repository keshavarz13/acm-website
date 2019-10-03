import React from "react" 
import "./styles/header-style.css"
import { NavLink } from 'react-router-dom'
import DropDown from "./DropDown"


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
      this.logoClickHandler = this.logoClickHandler.bind(this)
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
    
    logoClickHandler() { 
      window.location.replace("/")
    }

    render() {
      return(
        <div>
            <div className = "container">
              <div className = "dobble-container">

                  <div className= "nav-link-container">
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/status">Registration Status</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/PastResult">Past Results</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/Register">Register</NavLink>
                      <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/">Home</NavLink>
                      
                  </div>

                  <div className ="option">
                      <DropDown/>
                  </div>

                  <img src= {require("./../img/header-logo.png")} height="55" width = "170" onClick={this.logoClickHandler}/>
              </div>
            </div>
        </div>
      )
    }
}

export default Header