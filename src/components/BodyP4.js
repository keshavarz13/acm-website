import React from 'react';
import "./styles/sponsor.css"



class BodyP4 extends React.Component { 
    
    render() {


        return (
            <div className = "part4-container">
                 <div className = "new-poster" >
                        <img src="http://icpc.sharif.edu/2018/images/poster.png" width="300" height="400"/>
                </div>
                <div className= "part4-inner-container">
                    <div className = "sponsor-box">
                        <h1>Event Sponsor</h1>
                        <div className="line"></div>
                        <div className="sponsor-image"> <img src={require ("./../img/sponsor.png") } width ="250" height="250" /></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BodyP4