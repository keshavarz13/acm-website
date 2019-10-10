import React from "react"
import MapBox from "./MapBox"
import "./../styles/footer-style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faTwitter, faTelegram, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

class About extends React.Component { 
    render() {
        return(
            <div>
                <div className="footer-container">
                    <div className="row2">
                        <div className="column1">
                            <a href="https://ceit-ssc.ir">
                                <img 
                                    src={require("./../img/ssc-logo.png")} 
                                    width="300" height="85"
                                />
                            </a>
                            <div className="icons">
                                <div className="social_icon_div">
                                    <a href="mailto:ceit.ssc94@gmail.com" target="_blank">
                                        <FontAwesomeIcon icon={faGoogle} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://t.me/ceit_ssc" target="_blank">
                                        <FontAwesomeIcon icon={faTelegram} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://twitter.com/ceit_ssc" target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" className="social_icon"/>
                                    </a>
                                </div>
                                <div className="social_icon_div">
                                    <a href="https://instagram.com/ceit_ssc" target="_blank">
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
                   
                </div>
                <div className = "deep-footer">
                    <p>Copyright © 2019 <span><a href = "https://ceit-ssc.ir" target="_blank">AUT CEIT SSC</a>.</span> Developed by <span><NavLink onClick = {() => window.scrollTo(0, 0)} exact to="/Rengo">Rengo</NavLink></span> </p>
                </div>
            </div>
       
            
        )
    }
}

export default About 