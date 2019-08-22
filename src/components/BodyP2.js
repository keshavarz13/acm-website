import React from "react"
import "./styles/body-style.css"

class BodyP2 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
<<<<<<< HEAD
                    <img className= "blur-image" src ={require("./../img/second-part.jpg")}  height = "800" width="100%"/>
=======
                    <img className= "blur-image" src ={require("./../img/bottomImage.JPG")}  height = "800" width="100%"/>
>>>>>>> 3aaec0619f88ddacafb9256f6f46d41dde837de7
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
                    <div className ="timer2">
                        <p className  ="timer-number">10</p><p>Days</p>
                        <p className  ="timer-number">10</p><p>Hours</p>
                        <p className  ="timer-number">10</p><p>Minutes</p>
                        <p className  ="timer-number">10</p><p>Seconds</p>
                        
                        
                        
                        

                    </div> 
                </div>
                
                        
                
                
            </div>
        )
    }
}

export default BodyP2 