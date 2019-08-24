import React from 'react';
import "./styles/sponsor.css"
import "./styles/sher-style.css"


class BodyP4 extends React.Component { 
    
    render() {


        return (
            <div className = "part4-container">
                <div className = "sher-container">
                    <h1>SPONSOR</h1>
                    <img src={require ("./../img/sponsor.png") } width ="160" height="160" />
                    <p>snapp!</p>
                </div>
                
                <div className = "register-container">  
                    <div className = "register-b">REGISTER NOW :)</div>
                </div>
                
            </div>
        )
    }
}
export default BodyP4