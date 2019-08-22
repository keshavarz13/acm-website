import React from "react" 
import SherBox from "./SherBox"
import "./sher-box-container.css"

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
            <div style = {style}>
                <SherBox text= "lorem ipsum lorem ipsum lorem ipsum lorem ipsum" title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/419/419952.svg" />
                <SherBox text= "lorem ipsum lorem ipsum lorem ipsum lorem ipsum" title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/1373/1373259.svg" />
                <SherBox text= "lorem ipsum lorem ipsum lorem ipsum lorem ipsum" title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/755/755262.svg" />
            </div>
            
         
        </div>
      )
    }
}

export default SherBoxContainer