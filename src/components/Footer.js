import React from "react"
import MapBox from "./MapBox"
import "./styles/footer-style.css"
import { domainToASCII } from "url";

function social ()  { 
    return(
        <div>
               <div className ="social">               
                    <a href="" className ="social-item"><img src={require ("./../img/domain.png") }height="20" width = "20" /></a>    
                    <a href="" className ="social-item"><img src={require ("./../img/telegram.png")}width = "20" height="20"/></a>    
                    <a href="" className ="social-item"><img src={require ("./../img/instagram.png")}width = "20" height="20"/></a>    
                </div>
        </div>
    )
}

class About extends React.Component { 
    render(){
        return (
            <div className = "footer-container">
                <img src = {require("./../img/ssc-logo.png")}/>
                <div className="map-container"></div>
            </div>
        )
    }
}

export default About 