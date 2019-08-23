import React from "react"
import axios from 'axios'
import TimelineItem from 'vertical-timeline-component-for-react'
import TimeLineContainer from "../components/TimelineContainer"

class TimeLineContainerView extends React.Component {

    state = {
        timeLineItems: []
    }

    fetchTimeLineItems = () => {
        axios.get("http://localhost:8000/api").then(res => {
            this.setState({
                timeLineItems: res.data
            });
        });
    };

    componentDidMount() {
        this.fetchTimeLineItems();
    }

    // items = this.state.timeLineItems.map((item, index) => {
    //     return (<TimelineItem
    //         key = {index.toString()}
    //         dateText = {item.dateText}
    //         style = {item.style}
    //         dateInnerStyle= {item.dateInnerStyle}
    //     >
    //         <h3 style ={{color : "#ffffff"}}>{item.title}</h3>
    //         <p style ={{color : "#ffffff"}}>
    //             {item.innerHTML}
    //         </p>
    //     </TimelineItem>)
    // });
    render() {
        return (<TimeLineContainer data={this.state.timeLineItems}/>)
    }
}

export default TimeLineContainerView