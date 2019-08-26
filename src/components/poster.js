import React from 'react';
import "./styles/poster.css"




class Poster extends React.Component { 
    render(){
        return (
            <div className = "paper-container">
                 <div className = "paper">
                    <img
                    className= "poster-image" 
                    src = {this.props.src}
                    />
                    <div className= "darker-container">
                    <div className = "poster-darker"></div>
                    </div>
                    
                    <div className="poster-year">
                        {this.props.year}
                    </div>
                </div>
            </div>
         
        
        ) 

    }
}

export default Poster