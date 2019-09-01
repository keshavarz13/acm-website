import React from "react"
import "./styles/situation-card.css"

class SituationCard extends React.Component { 
    constructor() { 
        super() 
        this.state = { 
            dict : {
                    'PENDING': 'Pending Payment',
                    'PAID': 'Paid',
                    'APPROVED': 'Approved for participation',
                    'REJECTED': 'Denied Participation',
                    'RESERVED': 'Reserved registration beforehand'
            }
        }
    }

    render() {
        let color = ""
        if(this.props.data.status === "REJECTED")
                 color = "#e23838"
        else if (this.props.data.status === "APPROVED")
                 color = "#3c9440"
        else if (this.props.data.status === "PENDING")
                 color = "#6b6b6b"
        else if (this.props.data.status === "PAID")
                 color = "#3065a3"
        else if (this.props.data.status === "RESERVED")
                 color = "#aa740b"
            
        return (
            <div className ="situation-card" style = {{
                backgroundColor : color
            }}>
                <h1>{this.props.data.name}</h1>
                <p className = "state">State: <span>{this.state.dict[this.props.data.status]}</span></p>
                <p>Institution: <span>{this.props.data.institution}</span></p>
                <p>Team Country: <span>{this.props.data.country}</span></p>
            </div>
        )
    }
}

export default SituationCard 