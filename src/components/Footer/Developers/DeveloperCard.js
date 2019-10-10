import React from "react"
import "./../../styles/developer-page.css"
import { BrowserView, MobileView,} from "react-device-detect";

export default class DeveloperCard extends React.Component { 
    constructor() {
        super() 
        this.state = {
            flag: 0,
            src: "",
            styles: {
                filter: "grayscale(100%)"
            }
        }
        this.hoverHandler = this.hoverHandler.bind(this)
        this.unHoverHandler = this.unHoverHandler.bind(this)
    }

    componentDidMount() {
        this.setState({
            src : this.props.src1
        })
    }
    hoverHandler() {
        this.setState({
            src: this.props.src2,
            styles: {
                filter: "grayscale(0%)"
            }
        })
    }

    unHoverHandler() {
        this.setState({
            src: this.props.src1 ,
            styles: {
                filter: "grayscale(100%)"
            }
        })
    }

    render() {
        return(
            <div className="developer-card">
                <BrowserView>
                    <img 
                        src={this.state.src} 
                        style={this.state.styles} 
                        onMouseEnter={this.hoverHandler} 
                        onMouseLeave={this.unHoverHandler}
                    />
                </BrowserView>
                <MobileView>
                    <img 
                        src={this.state.src} 
                        style={this.state.styles} 
                        onTouchStart={this.hoverHandler} 
                        onTouchEnd={this.unHoverHandler} 
                    />
                </MobileView>
                <h5>{this.props.name}</h5>
                <h6>{this.props.rule}</h6>
                <h4>Email: <span>{this.props.email}</span></h4>
                
            </div>
        )
    }
}