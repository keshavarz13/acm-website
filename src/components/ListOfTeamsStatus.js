import React from "react"
import SituationCard from "./SituationCard"
import "./styles/situation-card.css"

class ListOfTeamsStatus extends React.Component { 


   

    render() {
        const cards = this.props.data.map((cardData) => <div className = "cards-container"><SituationCard data = {cardData}/></div>)
        return (     
            <div className = "super-status-cards-container" >  
                <div  className = "help-container">
                    <h1>Registered Teams</h1>
                    <p>
                        Here is the list of registered teams ordered by their registration time.<br/>
                        if your team name was not in registerd team list 24 hours after regitration, please inform us by:<br/> 
                        Email: <a href="mailto:ceit.ssc94@gmail.com">ceit.ssc94@gmail.com</a><br/>
                        Telegram: <a href="https://t.me/ceitssc">@ceitssc</a> <br/>
                    </p>
                    <div>
                        <div className = "help"> <div className = "color-circle"></div> <p> : Pending Payment</p></div>
                        <div className = "help"> <div className = "color-circle"></div> <p> : Paid</p></div>
                        <div className = "help"> <div className = "color-circle"></div> <p> : Approved for participation</p></div>
                        <div className = "help"> <div className = "color-circle"></div> <p> : Denied Participation</p></div>
                        <div className = "help"> <div className = "color-circle"></div> <p> : Reserved registration beforehand</p></div>
                    </div>
                </div>
                <div className = "status-cards-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default ListOfTeamsStatus
