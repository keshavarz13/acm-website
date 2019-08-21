import React from "react"
import "./body-style.css"

class BodyP2 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
                    <img src ={require("./../img/middleImage.JPG")} />
                    <div className = "dark-layer"></div>
                    <p className = "timer-text">CountDown Timer And TimeLine</p>
                </div>
                
                        
                
                
            </div>
        )
    }
}

export default BodyP2 