import React from "react"
import MapBox from "./MapBox"
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
                            <div className="map-container">
                                <MapBox />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "deep-footer">
                    <p>© 2019 Student Scientific Chapter of <span>Computer Engineering and IT Department</span> at <span>Amirkabir University of Technology</span></p>
                </div>
            </div>
       
            
        )
    }
}

export default About 