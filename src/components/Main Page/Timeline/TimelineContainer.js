import React from "react"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import background from "./../../../img/patern.jpg"

var HtmlToReactParser = require('html-to-react').Parser;
var parser = new HtmlToReactParser()

class TimelineContainer extends React.Component{
    render() {
        return (
            <div style={{
                backgroundImage: "url("+background+")",
                backgroundColor: "rgba(0,0,0,.7)"
            }}>
                <Timeline lineColor={'#ddd'}>
                    {
                        this.props.data.map((item,index) => (
                            <TimelineItem
                                key = {index.toString()}
                                dateText = {item.dateText}
                                style = {{color: JSON.parse(item.style)}}
                                dateInnerStyle= {{background: JSON.parse(item.dateInnerStyle)}}
                            >
                                <h3 style ={{ color:"#ffffff" }}>
                                    {item.title}
                                </h3>
                                <p style ={{ color:"#ffffff" }}>
                                    {parser.parse(item.innerHTML)}
                                </p>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </div>
        )
    }
}

export default TimelineContainer