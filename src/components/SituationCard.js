import React from "react"
import "./styles/situation-card.css"

class SituationCard extends React.Component { 
    constructor() { 
        super() 
        this.state = { 
            title : "", 
            name : "" , 
            institution : "" , 
            location : "" , 
            color : ""
        }
    }

    render() {
        let color = ""
        if(this.props.data.title === "Regected")
                 color = "rgb(44, 0, 0)"
        else if (this.props.data.title === "Approved")
                 color = "rgb(0, 44, 0)"
        else if (this.props.data.title === "Pending")
                 color = "rgb(0, 0, 44)"
        else if (this.props.data.title === "Paid")
                 color = "rgb(0, 0, 44)"
        else if (this.props.data.title === "Reserved")
                 color = "rgb(43, 46, 1)"
            
        return (
            <div className ="situation-card" style = {{
                backgroundColor : color
            }}>
                <h1>{this.props.data.name}</h1>
                <p className = "state">State : <span>{this.props.data.title}</span></p>
                <p>Institution : <span>{this.props.data.institution}</span></p>
                <p>Team Location : <span>{this.props.data.location}</span></p>
            </div>
        )
    }
}

export default SituationCard 