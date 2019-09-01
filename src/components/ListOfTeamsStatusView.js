import React from "react"
import axios from 'axios'
import ListOfTeamsStatus from "./ListOfTeamsStatus"

class TimeLineContainerView extends React.Component {
    state = {
        teams:  [
            {
                status : "REJECTED", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            }, {
                status : "APPROVED", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            }, {
                status : "APPROVED", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            }, {
                status : "PENDING", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            }, {
                status : "PAID", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            }, {
                status : "PENDING", 
                name : "sooode sahame banki!" , 
                institution : "amir kabir university of technology" , 
                location : "Iran" , 
            },
        ]
    }

    fetchTimeLineItems = () => {
        axios.get("http://localhost:8000/api/teams").then(res => {
            this.setState({
                teams: res.data
            });
        });
    };

    componentDidMount() {
        this.fetchTimeLineItems();
    }

    render() {
        return (<ListOfTeamsStatus data={this.state.teams}/>)
    }
}

export default TimeLineContainerView