import React from "react"
import "./styles/body-style.css"

class BodyP2 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
                    <img className= "blur-image" src ={require("./../img/middleImage.JPG")}  height = "500"/>
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

export default BodyP2 