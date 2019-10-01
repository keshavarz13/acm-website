import React from "react"
import axios from "axios"
import PastContest from "./PastContest"

export default class PastContestContainer extends React.Component { 
    constructor() { 
        super() 
        this.state = { 
            allImages : [] 
        }
        this.fetchContests = this.fetchContests.bind(this)
    }

    fetchContests = () => {
        axios.get(process.env.REACT_APP_URL+"/api/contests/"+this.props.data.year ).then(res => {
            this.setState({
                allImages: res.data
            });
        });
    };

    componentDidMount() { 
        this.fetchContests()
    }

    render () { 
        return(
            <PastContest data = {this.props.data}  />
        )
    }
}