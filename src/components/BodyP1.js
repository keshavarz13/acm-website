import React from "react"
import "./styles/body-style.css"
import { height } from "@material-ui/system";

class BodyP1 extends React.Component { 
  
    render() {
        let height = 800 ; 
        if(window.innerHeight > 800){
            height = window.innerHeight - 60 ;
        }
        if(window.innerWidth < 400 )
        {
            height = window.innerHeight;
        }
        return (
            <div>
                <div className= "container2">
                    <img 
                        className="blur-image" 
                        src ={ require("./../img/topImage.JPG") } 
                        width="100%" height={height}
                    />
                    <div className= "dark-layer"></div>
                    <div className="banner-container">
                        <img className="banner1" src ={require("./../img/banner.png")}  />
                    </div>
                    <div className="banner-container">
                        <img 
                            className="banner2" 
                            src={ require("./../img/banner2.png") }  
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyP1 