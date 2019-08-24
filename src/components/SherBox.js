import React from "react"
import "./styles/sher-style.css"

class SherBox extends React.Component { 
    render() { 
        return(
            <div className="hover-contaner">
                <div className = "sher-container">
                    <img src={this.props.url} width ="160" height="160" />
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                 </div>
            </div>
        
        )
    }
}

export default SherBox 