import React from 'react';
import "./styles/poster.css"




class Poster extends React.Component { 
    
    render(){
        const a = {
            scoreBoard :this.props.contest.scoreBoard , 
            question : this.props.contest.question , 
            images : this.props.contest.images
        }
        
        return (
            <div className = "paper-container" >
                 <div className = "paper">
                    <img
                    className= "poster-image" 
                    src = {this.props.contest.src}
                    />
                    <div className= "darker-container">
                    <div className = "poster-darker"></div>
                    </div>
                    
                    <div className="poster-year">
                        {this.props.contest.year}
                    </div>
                </div>
            </div>
         
        
        ) 

    }
}

export default Poster