import React from "react"
import "./styles/body-style.css"

class BodyP1 extends React.Component { 
    render(){
        return (
            <div>
                <div className= "container2">
                    
                    <img className= "blur-image" src ={require("./../img/topImage.JPG")} />
                    <div className = "dark-layer"></div>
                    <div className ="timer">
                         <img className="banner1" src ={require("./../img/banner.png")}  />
                    </div>
                    <div className ="timer">
                         <img className="banner2" src ={require("./../img/banner2.png")}  />
                    </div>
                    
                </div>
                
                        
                
                
            </div>
        )
    }
}

export default BodyP1 