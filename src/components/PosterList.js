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
                    poster : "" , 
                    year : "",
                    final_ranking_online :"" , 
                    final_ranking_onsite :"" , 
                    problems : "" , 
                   
                },{
                    poster : "" , 
                    year : "",
                    final_ranking_online :"" , 
                    final_ranking_onsite :"" , 
                    problems : "" , 
                   
                },{
                    poster : "" , 
                    year : "",
                    final_ranking_online :"" , 
                    final_ranking_onsite :"" , 
                    problems : "" , 
                   
                },{
                    poster : "" , 
                    year : "",
                    final_ranking_online :"" , 
                    final_ranking_onsite :"" , 
                    problems : "" , 
                   
                },
            ] 
               
            
        }

        this.fetchContests = this.fetchContests.bind(this)
    }

    fetchContests = () => {
        axios.get(process.env.REACT_APP_URL+"/api/contests").then(res => {
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
        console.log(this.state.data[0].poster)
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