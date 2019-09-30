import React from "react"
import Gallery from "./Gallery";
import axios from "axios"
import PastContestLinkCard from './PastContestLinkCard'
import "./styles/past-contest.css"

class PastContest extends React.Component { 
    constructor(){
       
        super()
        this.fetchContests = this.fetchContests.bind(this)
        this.function = this.function.bind(this)
        this.state = {
            isFetched : false ,  
            isManaged : false , 
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

    fetchContests = () => {
        axios.get(process.env.REACT_APP_URL+"api/contests/"+this.props.data.year ).then(res => {
            this.setState({
                allImages: res.data.galleries , 
                isFetched : true
            });
        });
    };

    async componentDidMount(){
         this.fetchContests() 

        
    }

    function() { 
        console.log(this.state.allImages)

        for(let i = 0 ; i<this.state.allImages.length ; i++ ) {
            if(this.state.allImages[i].title === "Staffs"){
                this.setState({
                    staffs : this.state.allImages[i].photos
                })
            }
            else if(this.state.allImages[i].title === "Teams"){
                this.setState({
                    teams : this.state.allImages[i].photos
                })
            }
            else if(this.state.allImages[i].title === "Other"){
                this.setState({
                    other : this.state.allImages[i].photos
                })
            }
        }
    }


    render(){
        if(this.state.isFetched && !this.state.isManaged){
            this.function()
            this.setState({
                isManaged : true
            })
        }
        console.log(this.state)   
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