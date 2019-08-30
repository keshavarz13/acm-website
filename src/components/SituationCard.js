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
        return (
            <div className ="situation-card">
                <h1>{this.props.data.title}</h1>
                <p>Team Name : <span>{this.props.data.name}</span></p>
                <p>Institution : <span>{this.props.data.institution}</span></p>
                <p>Team Location : <span>{this.props.data.location}</span></p>
            </div>
        )
    }
}

export default SituationCard 