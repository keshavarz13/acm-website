import React from "react"
import axios from 'axios'
import TimeLineContainer from "./TimelineContainer"

class TimeLineContainerView extends React.Component {
    state = {
        timeLineItems: []
    }

    fetchTimeLineItems = () => {
        let apiUrl = process.env.REACT_APP_URL
        apiUrl = apiUrl +"/api/timelineitems"
        axios.get(apiUrl).then(res => {
            this.setState({
                timeLineItems: res.data
            });
        });
    };

    componentDidMount() {
        this.fetchTimeLineItems();
    }

    render() {
        return (<TimeLineContainer data={this.state.timeLineItems}/>)
    }
}

export default TimeLineContainerView