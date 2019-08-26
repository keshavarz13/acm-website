import React from 'react';
import "./styles/poster.css"




class Poster extends React.Component { 
    constructor(){
        super()
        this.state = { 

        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler ()  {
        const a = {
            scoreBoard :this.props.contest.scoreBoard , 
            question : this.props.contest.question , 
            images : this.props.contest.images
        }
        this.props.pastContestProvider(a)

    }
    
    render(){
        
        
        return (
            <div className = "paper-container"  onClick={this.clickHandler} >
                 <div className = "paper">
                    <img
                    className= "poster-image" 
                    src = {this.props.contest.poster}
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