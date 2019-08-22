import React from "react"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'

class TimelineContainer extends React.Component{
    render() {
        return (
            <div>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="001"
                        dateText="17th to 28th of October 2019"
                        style={{ color: '#e86971' }}
                    >
                        <h3>Registration Dates</h3>
                        <p>
                            Registration period of On-Site contest for Iranian teams is from 17th to 28th of October 2019.<br></br>
                            Others can register until 4th of November 2019.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="5th of November 2019"
                        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                        bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3 style={{ color: '#61b8ff' }}>Orientation Day (Iranian Teams Only)</h3>
                        <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="8th of November 2019"
                        dateInnerStyle={{ background: '#76bb7f' }}
                    >
                        <h3>On-Site Contest</h3>
                        <p>
                            10:00:00 (UTC)<br></br>
                            13:30:00 (GMT +3:30 - Iran Standard Time)
                        </p>
                    </TimelineItem>
                    </Timeline>
            </div>
        )
    }
}

export default TimelineContainer
 
