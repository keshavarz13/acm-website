import React from "react"
import "./styles/body-style.css"
import "./styles/countdown-style.css"
var FlipDown = require("./countdown")
// import axios from "axios"

class BodyP2 extends React.Component { 

    componentDidMount () {
        var stopTime = this.props.data.stopTime.toString()
        console.log(stopTime)
        var stopDate = new Date(stopTime).getTime()
        // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 80) + 1;
        var flipdown = new FlipDown(stopDate).start()
        // console.log("MAAAAAMMAAAAD")
    }

    render() {
        
        return (
            <div>
                <div className="container2">
                    <img 
                        style={{ objectFit: "cover" }} 
                        className= "blur-image" 
                        src={ require("./../img/bottomImage.JPG") } 
                        height="800" width="100%"
                    />
                    <div className = "dark-layer"></div>                

                    <p className = "timer-text">Contest starts in</p>
                    {/* <div id="stopTimer"  time={this.props.data}></div> */}
                    <div className ="timer">  
                        <div id="flipdown" className="flipdown"></div>  
                        {/* {var FlipDown}                     */}
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BodyP2 