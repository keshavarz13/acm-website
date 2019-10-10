import React from "react"
import { NavLink } from 'react-router-dom'
import "../styles/menu.css"

export default class RegisterMenu extends React.Component { 
    constructor () { 
        super()  
        this.state = { 
            style1: { 
                transform : "scale(1)",
                transitionProperty :"transform", 
                transitionDuration: "200ms",
            }
            , 
            style2: { 
                transform : "scale(1)",
                transitionProperty :"transform", 
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
                style1: { 
                    transform : "scale(1.1)",
                    transitionProperty :"transform", 
                    transitionDuration: "200ms",
                }
            })
    }
    onleave(){
            this.setState({
                style1: { 
                    transform : "scale(1)",
                    transitionProperty :"transform", 
                    transitionDuration: "200ms",
                }
            })
    }
    onhover2() { 
        this.setState({
            style2: { 
                transform : "scale(1.1)",
                transitionProperty :"transform", 
                transitionDuration: "200ms",
            }
        })
    }
    onleave2(){
            this.setState({
                style2: { 
                    transform : "scale(1)",
                    transitionProperty :"transform", 
                    transitionDuration: "200ms",
                }
            })
    }

    render() {
        return(
            <div className="menu-container">
                <div className="card-container" >
                    <NavLink className="nav-link"
                        onClick={() => window.scrollTo(0, 0)}  
                        exact to="/onsiteRegister"
                    >
                        <div className ="register-card"
                            onMouseEnter={this.onhover2} 
                            onMouseLeave={this.onleave2}
                            style={this.state.style2}    
                        >
                            <div className="card-image">
                                <img src={require("./../../img/onsite.svg")}
                                    width="200" height="200"
                                />
                            </div>  
                            <div className="card-text">
                                <p>
                                    On-Site Contest
                                </p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className="nav-link"
                        onClick={() => window.scrollTo(0, 0)} 
                        exact to="/onlineRegister"
                    >
                        <div className ="register-card"
                            style={this.state.style1} 
                            onMouseEnter={this.onhover} 
                            onMouseLeave={this.onleave}
                        >
                            <div className="card-image">
                                <img 
                                    src={require("./../../img/online.svg")} 
                                    width="200" height="200"/>
                            </div>
                            <div className="card-text">
                                <p>
                                    Online Contest
                                </p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}