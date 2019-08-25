import React from "react"
import axios from 'axios'
import TimeLineContainer from "./TimelineContainer"

class TimeLineContainerView extends React.Component {
    state = {
        timeLineItems: []
    }

    fetchTimeLineItems = () => {
        axios.get("http://localhost:8000/api/timelineitems").then(res => {
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