import React from "react"
import axios from 'axios'
import ListOfTeamsStatus from "./ListOfTeamsStatus"

class TimeLineContainerView extends React.Component {
    state = {
        teams:  []
    }

    fetchTimeLineItems = () => {
        axios.get(process.env.REACT_APP_URL+"/api/teams/onsite").then(res => {
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