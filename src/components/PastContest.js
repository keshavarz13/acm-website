import React from "react"
import Gallery from "./Gallery";
import axios from "axios"
import PastContestLinkCard from './PastContestLinkCard'
import "./styles/past-contest.css"

class PastContest extends React.Component { 
    constructor(){
       
        super()
        this.state = { 
            allImages : [],
            staffs : [
                {
                    src: "",
                    thumbnail_url: "",
                    caption: "",
               
                },
            ],
            teams : [
                {
                    src: "",
                    thumbnail_url: "",
                    caption: "",
               
                },
            ],
            
            other : [
                {
                    src: "",
                    thumbnail_url: "",
                    caption: "",
               
                },
            ],
        }
    }

 

    componentDidMount(){
        for(let i = 0 ; i<this.props.allImages.length ; i++ ) {
            if(this.props.allImages[i].title === "Staffs"){
                this.setState({
                    staffs : this.props.allImages[i].photos
                })
            }
            else if(this.props.allImages[i].title === "Teams"){
                this.setState({
                    teams : this.props.allImages[i].photos
                })
            }
            else if(this.props.allImages[i].title === "Other"){
                this.setState({
                    other : this.props.allImages[i].photos
                })
            }
        }
        
    }

    render(){
        return(
            <div className = "past-contest-container">
                <div className = "sher-box-container">
                    <div className="contest-row">
                        <div className = "column"><PastContestLinkCard  title ="Online ScoreBoard" url={require("./../img/scoreboard.svg")} link= {this.props.data.final_ranking_online}/></div>
                        <div className = "column"><PastContestLinkCard  title ="Problems" url={require("./../img/question.svg")} link= {this.props.data.problems} /></div>
                        <div className = "column"><PastContestLinkCard  title ="Onsite ScoreBoard" url={require("./../img/scoreboard.svg")} link= {this.props.data.final_ranking_onsite} /></div>
                    </div>
                </div>

                <div className="photo-wall">
                    <Gallery images = {this.state.images} staffs = {this.state.staffs} other = {this.state.other} teams = {this.state.teams}/>
                </div>
                <h1></h1>
                
            </div>
        )
    }
}

export default PastContest