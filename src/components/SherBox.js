import React from "react"
import "./styles/sher-style.css"
import { BrowserView, MobileView,} from "react-device-detect";

class SherBox extends React.Component { 
    constructor(){
        super()
        this.state ={
            style : {
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transform : "scale(1.0)"
       
            }
        }
        this.hoverHandler = this.hoverHandler.bind(this)
        this.unHoverHandler = this.unHoverHandler.bind(this)
    }

    hoverHandler(){
        this.setState({
            style : {
                // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.8)",
                transform : "scale(1.1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }

    unHoverHandler(){
        this.setState({
            style : {
                // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                transform : "scale(1.0)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }

    render() { 
        return(
            <div className="hover-contaner" >
                <BrowserView>
                    <div className = "sher-container" style = {this.state.style} onMouseEnter = {this.hoverHandler} onMouseLeave = {this.unHoverHandler} >
                        <img src={this.props.url} width ="160" height="160" />
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className = "sher-container"  >
                        <img src={this.props.url} width ="160" height="160" />
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                    </div>
                </MobileView>
              
            </div>
        
        )
    }
}

export default SherBox 