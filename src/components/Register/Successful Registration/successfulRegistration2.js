import React from "react"
import { NavLink } from 'react-router-dom'
import "./../../styles/successfulRegisteration.css"

class successfulRegistration extends React.Component {
    render() {
        return(
            <div className="successful-registration"> 
                <img src="https://image.flaticon.com/icons/svg/190/190411.svg" 
                    width="200" height="200"/>
                <h1>
                    Your registration was successful :)
                </h1>
                <NavLink className="nav-link"
                    onClick={() => window.scrollTo(0, 0)}  
                    exact to="/"
                >
                    <div className="registration-status-button">
                        Home
                    </div>
                </NavLink> 
            </div>
        )
    }
}

export default successfulRegistration