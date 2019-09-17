import React from "react"
import { NavLink } from 'react-router-dom'
import "../styles/menu.css"

export default class RegisterMenu extends React.Component { 
    render() {
        return (
            <div className = "menu-container">
                <div className ="card-container">
                    <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/onlineRegister">
                        <div className ="register-card">
                            <div className = "card-image">
                                <img src = { require("./../../img/online.svg") } width = "200" height = "200"/>
                            </div>
                            <div className = "card-text">
                                <p>
                                    ONLINE REGISTER
                                </p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/onsiteRegister">
                        <div className ="register-card">
                            <div className = "card-image">
                                <img src = { require("./../../img/onsite.svg") } width = "200" height = "200"/>
                            </div>  
                            <div className = "card-text">
                                <p>
                                    ONSITE REGISTER
                                </p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}