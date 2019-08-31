import React from "react"
import MapBox from "./MapBox"
import "./styles/footer-style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegram, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

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
                        <div className = "column1">
                            <img src = {require("./../img/ssc-logo.png")} width="300" height="85"/>
                            <div className="icons">
                                <div className="social_icon_div">
                                    <a href="mailto:ceit.ssc94@gmail.com">
                                        <FontAwesomeIcon icon={faGoogle} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://t.me/ceit_ssc">
                                        <FontAwesomeIcon icon={faTelegram} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://twitter.com/ceit_ssc">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://instagram.com/ceit_ssc">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className = "column2">
                            <div className="map-container">
                                <MapBox />
                            </div>
                        </div>
                    </div>
                    <div className ="h-line"></div>
                </div>
                <div className = "deep-footer">
                    <p>© 2019 <span><a href = "ceit-ssc.ir">AUT CEIT SSC</a></span> All Rights Reserved. Developed by <span href = "/Rengo"><a>Rengo</a></span></p>
                </div>
            </div>
       
            
        )
    }
}

export default About 