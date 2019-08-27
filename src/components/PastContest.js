import React from "react"
import Gallery from 'react-grid-gallery';
import SherBox from './SherBox'
import "./styles/past-contest.css"



class PastContest extends React.Component { 
    render(){
        return(
            <div className = "past-contest-container">
                <div className = "sher-box-container">
                    <div className="row">
                        <div className = "column"><SherBox text= "First chiz" title ="Cooperation" url={require("./../img/group.png")} /></div>
                        <div className = "column"><SherBox text= "Second chiz" title ="Competition" url={require("./../img/trophy.png")} /></div>
                        <div className = "column"><SherBox text= "Third chiz" title ="Practice" url={require("./../img/gym.png")} /></div>
                    </div>
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