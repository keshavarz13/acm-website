import React from "react"


class PastContestLinkCard extends React.Component { 
    render(){
        return(
            <div>
                
                <div className = "link-card-container">
                    <img src={this.props.url} width ="160" height="160" />
                    <h1>{this.props.title}</h1>
                 </div>
                 
            </div>
        )
    }
}
export default PastContestLinkCard