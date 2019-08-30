import React from 'react';
import "./styles/poster.css"
import { NavLink } from 'react-router-dom'




class Poster extends React.Component { 
    constructor(){
        super()
        this.state = { 
            styles : {
                transform: "scale(1)"
            }
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.hoverHandler = this.hoverHandler.bind(this)
        this.unHoverHandler = this.unHoverHandler.bind(this)
    }

    clickHandler ()  {
        this.props.pastContestProvider(this.props.contest)

    }

    hoverHandler(){
        this.setState({
            styles : {
                transform: "scale(1.08)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }

    unHoverHandler(){
        this.setState({
            styles : {
                transform: "scale(1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }
    
    render(){
        
        
        return (
            <NavLink onClick={() => window.scrollTo(0, 0)}  exact to="/PastContest">
                <div className = "paper-container" style={this.state.styles} onClick={this.clickHandler} onMouseEnter = {this.hoverHandler} onMouseLeave = {this.unHoverHandler}>
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
            </NavLink>
           
         
        
        ) 

    }
}

export default Poster