import React from "react"
import "./sher-style.css"

class SherBox extends React.Component { 
    render() { 
        let src = "./../img/trophy.png";
        return(
            <div className = "sher-container">
                <img src= {this.props.url} role="presentation" width ="160" height="160" />
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default SherBox 