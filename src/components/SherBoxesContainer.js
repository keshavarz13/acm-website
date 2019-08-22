import React from "react" 
import SherBox from "./SherBox"
import "./styles/sher-box-container.css"

class SherBoxContainer extends React.Component {
    constructor() { 
        super() 

    }
    
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    setStyle() {

    }

    render(){

      return(
        <div>
            <div className = "sher-box-container">
                <div className="row">
                    <div className = "column"><SherBox text= "First chiz" title ="Cooperation" url={require("./../img/group.png")} /></div>
                    <div className = "column"><SherBox text= "Second chiz" title ="Competition" url={require("./../img/trophy.png")} /></div>
                    <div className = "column"><SherBox text= "Third chiz" title ="Practice" url={require("./../img/gym.png")} /></div>
                </div>
           
            </div>
            
         
        </div>
      )
    }
}

export default SherBoxContainer