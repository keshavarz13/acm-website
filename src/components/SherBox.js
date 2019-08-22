import React from "react"
import "./sher-style.css"

class SherBox extends React.Component { 
    render() { 
        return(
            <div className = "sher-container">
                <img src= {require("./../img/trophy.png")} width ="160" height="160"/>
                <h1>lorem ipsum</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
        )
    }
}

export default SherBox 