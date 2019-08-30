import React from "react"
import MapBox from "./MapBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "./styles/footer-style.css"

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
            <div>
                <div className = "footer-container">
                    <div className = "row2">
                        <div className = "column1"><img src = {require("./../img/ssc-logo.png")} width="300" height="85"/></div>
                        <div className = "column2">
                            <MapBox />
                        </div>
                        <a href="mailto:ceit.ssc94@gmail.com">
                            <FontAwesomeIcon icon={faGoogle} size="2x" style={{color: "#999999"}}/>
                        </a>
                        <a href="https://t.me/ceit_ssc">
                            <FontAwesomeIcon icon={faTelegram} size="2x" style={{color: "#999999"}}/>
                        </a>
                        <a href="https://twitter.com/ceit_ssc">
                            <FontAwesomeIcon icon={faTwitter} size="2x" style={{color: "#999999"}}/>
                        </a>
                        <a href="https://instagram.com/ceit_ssc">
                            <FontAwesomeIcon icon={faInstagram} size="2x" style={{color: "#999999"}}/>
                        </a>
                        
                        
                    </div>
                </div>
                <div className = "deep-footer">
                    <p>
                        Copyright © 2019 <span><a href = "http://ceit-ssc.ir">AUT CEIT SSC</a>.&nbsp;<br/>
                        </span>All Rights Reserved. Developed by <span><a href = "/Rengo">Rengo</a></span>
                    </p>
                </div>
            </div>
       
            
        )
    }
}

export default About 