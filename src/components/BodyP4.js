import React from 'react';
import "./styles/sponsor.css"

class BodyP4 extends React.Component { 
    
    render() {


        return (
            <div className = "part4-container">
                <div className = "sponsor-container">
                    <h4>Sponsor</h4>
                    <img src={require("./../img/patern.jpg")}  />
                </div>
                
                <div className = "register-container">  
                    <div className = "register-b">REGISTER NOW :)</div>
                </div>
                
            </div>
        )
    }
}
export default BodyP4