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
                    <div className = "column"><SherBox text= "First sher o ver" title ="lorem ipsum" url={require("./../img/group.png")} /></div>
                    <div className = "column"><SherBox text= "Second sher o ver" title ="lorem ipsum" url={require("./../img/trophy.png")} /></div>
                    <div className = "column"><SherBox text= "Third sher o ver" title ="lorem ipsum" url={require("./../img/gym.png")} /></div>
                </div>
           
            </div>
            
         
        </div>
      )
    }
}

export default SherBoxContainer