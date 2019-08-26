import React from "react"
import Gallery from 'react-grid-gallery';
import "./styles/past-contest.css"



class PastContest extends React.Component { 
    render(){
        return(
            <div className = "past-contest-container">
                <div>
                    slm
                </div>
                <div className="photo-wall">
                    <Gallery images={this.props.data.images} />
                </div>
                <h1></h1>
                
            </div>
        )
    }
}

export default PastContest