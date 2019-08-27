import React from "react"
import MapBox from "./MapBox"
import "./styles/footer-style.css"
import { domainToASCII } from "url";

function social ()  { 
    return(
        <div>
               <div className ="social">               
                    <a href="" className ="social-item"><img src={require ("./../img/domain.svg") }height="30" width = "30" /></a>    
                    <a href="" className ="social-item"><img src={require ("./../img/telegram.svg")}height="30" width = "30"/></a>    
                    <a href="" className ="social-item"><img src={require ("./../img/instagram.svg")}height="30" width = "30"/></a>    
                </div>
        </div>
    )
}

class About extends React.Component { 
    render(){
        return (
            <div className = "footer-container">
                <div className = "row">
                    <div className = "column1"><img src = {require("./../img/ssc-logo.png")} width="300" height="100"/></div>
                    <div className = "column2">
                        <div className="map-container">
                            <MapBox />
                        </div>
                    </div>
                </div>
                
                    
                   
                
            </div>
        )
    }
}

export default About 