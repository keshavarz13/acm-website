import React from "react"
import { NavLink } from 'react-router-dom'
import "../styles/menu.css"

export default class RegisterMenu extends React.Component { 
    constructor () { 
        super()  
        this.state = { 
            style1 : { 
                transform : "scale(1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms",
            }
            , 
            style2 : { 
                transform : "scale(1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms",
            }

        }
        this.onhover = this.onhover.bind(this)
        this.onleave = this.onleave.bind(this) 
        this.onhover2 = this.onhover2.bind(this)
        this.onleave2 = this.onleave2.bind(this)
    }
    onhover() { 
            this.setState({
                style1 : { 
                    transform : "scale(1.1)",
                    transitionProperty :"transform" , 
                    transitionDuration: "200ms",
                }
            })
    }
    onleave(){
            this.setState({
                style1 : { 
                    transform : "scale(1)",
                    transitionProperty :"transform" , 
                    transitionDuration: "200ms",
                }
            })
    }
    onhover2() { 
        this.setState({
            style2 : { 
                transform : "scale(1.1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms",
            }
        })
    }
    onleave2(){
            this.setState({
                style2 : { 
                    transform : "scale(1)",
                    transitionProperty :"transform" , 
                    transitionDuration: "200ms",
                }
            })
    }

    render() {
        return (
            <div className = "menu-container">
                <div  className ="card-container" >
                    <NavLink onClick={() => window.scrollTo(0, 0)} className="nav-link" exact to="/onlineRegister">
                        <div style = {this.state.style1} onMouseEnter={this.onhover} onMouseLeave={this.onleave} className ="register-card">
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
                        <div style = {this.state.style2} onMouseEnter={this.onhover2} onMouseLeave={this.onleave2}   className ="register-card">
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