import React from 'react';
import "./styles/sponsor.css"



class BodyP4 extends React.Component { 
    
    render() {


        return (
            <div className = "part4-container">
                <div className= "part4-inner-container">
                    <div className = "sponsor-box">
                        <h1>SPONSOR</h1>
                        <div className="line"></div>
                        <div className="sponsor-image"> <img src={require ("./../img/sponsor.png") } width ="250" height="250" /></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BodyP4