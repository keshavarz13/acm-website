import React from "react"
import "./styles/body-style.css"
import "./styles/countdown-style.css"
import "./countdown"

class BodyP2 extends React.Component { 
    constructor() { 
        super() 
        this.state={ 
            d: 0,
            h: 0, 
            m: 0,
            s: 0,
        }
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
                    <div id="flipdown" class="flipdown"></div>
                    <div className ="timer">
                        <p className="timer-number">10</p>
                        <p className="timer-number">10</p>
                        <p className="timer-number">10</p>
                        <p className="timer-number">10</p>
                        <p>Days</p>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>
                    </div>
                    <div className="timer2">
                        <p className="timer-number">10</p><p>Days</p>
                        <p className="timer-number">10</p><p>Hours</p>
                        <p className="timer-number">10</p><p>Minutes</p>
                        <p className="timer-number">10</p><p>Seconds</p>
                    </div> 
                </div>
            </div>
        )
    }
}

export default BodyP2 