import React from "react"
import "./styles/past-contest-link-card.css"


class PastContestLinkCard extends React.Component { 
    constructor() { 
        super() 
        this.state = {
        }
        this.change = this.change.bind(this)
    }

    change() { 
        window.location.replace(this.props.link)
    }
    render(){
        return(
            <div >
                
                <div className = "link-card-container" onClick={this.change}>
                    <img src={this.props.url} width ="130" height="130" />
                    <a  target="_blank">
                         <h1>{this.props.title}</h1>
                    </a>
                 </div>
                 
            </div>
        )
    }
}
export default PastContestLinkCard