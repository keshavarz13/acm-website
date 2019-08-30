import React from "react"
import SituationCard from "./SituationCard"
import "./styles/situation-card.css"

class ListOfTeamsStatus extends React.Component { 
    constructor() { 
        super() 
        this.state ={
            data : [
                {
                    title : "Reserved", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Approved", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Approved", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Approved", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Paid", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Pending", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Reserved", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Regected", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                }, {
                    title : "Pending", 
                    name : "sooode sahame banki!" , 
                    institution : "amir kabir university of technology" , 
                    location : "Iran" , 
                },
            ]
        }
    }
    render() {
        const cards = this.state.data.map((cardData) => <div className = "cards-container"><SituationCard data = {cardData}/></div>)
        return (     
            <div className = "super-status-cards-container" >  
                <div className = "status-cards-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default ListOfTeamsStatus
