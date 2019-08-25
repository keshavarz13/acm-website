import React from "react"
import "./styles/body-style.css"
import "./styles/countdown-style.css"
var FlipDown = require("./countdown")

class BodyP2 extends React.Component { 
    componentDidMount () {
        var stopTime = this.props.data.stopTime.toString()
        var stopDate = new Date(stopTime).getTime() / 1000
        var flipdown = new FlipDown(stopDate).start()
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
                    <div className ="timer">  
                        <div id="flipdown" className="flipdown"></div>  
                    </div>
                
                </div>
            </div>
        )

    }
}

export default BodyP2 