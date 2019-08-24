import React from "react"
import "./styles/body-style.css"
import "./styles/countdown-style.css"
import "./countdown"
import axios from "axios"

class BodyP2 extends React.Component { 

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
                    <div id="stopTimer"  time={this.props.data}></div>
                    {/* <div className ="timer">  
                        <div id="flipdown" className="flipdown"></div>                      
                    </div> */}
                
                </div>
            </div>
        )
    }
}

export default BodyP2 