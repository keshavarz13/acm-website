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
        
                <img src = {require("./../img/ssc-logo.png")}/>
                <div className="social-container">{social()}</div>
                

                <div className="map-container">
                    <MapBox />
                    
                </div>
            </div>
        )
    }
}

export default About 