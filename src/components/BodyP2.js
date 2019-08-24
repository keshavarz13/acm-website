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
                    <div className = "dark-layer"> </div>             

                    <p className = "timer-text">Contest starts in</p>
                    <p className = "timer-text2">REGISTER NOW!</p>
                    <div className ="timer">  
                        <div id="flipdown" class="flipdown"></div>                      
                    </div>

                   

                    

                </div>
            </div>
        )
    }
}

export default BodyP2 