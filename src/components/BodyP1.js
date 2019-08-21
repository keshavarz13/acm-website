import React from "react"
import "./body-style.css"

class BodyP1 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
                    <img className= "blur-image" src ={require("./../img/topImage.JPG")} />
                    <div className = "dark-layer"></div>
                    <div className ="timer">
                    <img src ={require("./../img/banner.png")} width = "900" height = "300"/>

                    </div>
                    
                </div>
                
                        
                
                
            </div>
        )
    }
}

export default BodyP1 