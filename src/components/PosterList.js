import React from "react"  
import Poster from "./poster";
import axios from 'axios'
import "./styles/poster.css"

class PosterList extends React.Component { 
    constructor()  { 
        super() 
        this.state = {
            data :[
                {
                    poster : "http://icpc.sharif.edu/2018/images/poster.png" , 
                    year : "2018",
                    final_ranking_online :"http://irsv.upmusics.com/Downloads/Musics/Reza%20Sadeghi%20-%20Shahr%20Ashoob%20(128).mp3" , 
                    final_ranking_onsite :"http://irsv.upmusics.com/Downloads/Musics/Reza%20Sadeghi%20-%20Shahr%20Ashoob%20(128).mp3" , 
                    problems : "" , 
                   
                },
            ] 
               
            
        }

        this.fetchContests = this.fetchContests.bind(this)
    }

    fetchContests = () => {
        axios.get("http://localhost:8000/api/contests").then(res => {
            this.setState({
                data: res.data
            });
        });
    };

    componentDidMount() { 
        this.fetchContests()
    }

    render () { 
        const posters = this.state.data.map((contest) => <div className = "columns"><Poster contest={contest} pastContestProvider = {this.props.pastContestProvider}/></div>)
        return(
            <div className = "sher-box-container2"> 
                <div className="row3">
                    {posters}
                </div>  
                
            </div>
        )
    }
}

export default PosterList