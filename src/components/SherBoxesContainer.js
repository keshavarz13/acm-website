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
                    <div className = "column"><SherBox text= "	 “boys will be boys,” women face higher conduct women face higher conduct." title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/419/419952.svg" /></div>
                    <div className = "column"><SherBox text= "	 “boys will be boys,” women face higher conduct women face higher conduct." title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/1373/1373259.svg" /></div>
                    <div className = "column"><SherBox text= "	 “boys will be boys,” women face higher conduct women face higher conduct." title ="lorem ipsum" url ="https://image.flaticon.com/icons/svg/755/755262.svg" /></div>
                </div>
           
            </div>
            
         
        </div>
      )
    }
}

export default SherBoxContainer