import React from "react"
import "./body-style.css"

class BodyP1 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
                    <img src ={require("./../img/topImage.JPG")} />
                    <div className = "dark-layer"></div>
                    
                  
                    <p className = "timer-text">Our Next Event Starts in</p>
                    <div className ="timer">
                        <p className  ="timer-number">10</p>
                        <p className  ="timer-number">10</p>
                        <p className  ="timer-number">10</p>
                        <p className  ="timer-number">10</p>
                        <p>Days</p>
                        <p>Hours</p>
                        <p>Minutes</p>
                        <p>Seconds</p>

                    </div>
                    
                </div>
                
                        
                
                
            </div>
        )
    }
}

export default BodyP1 