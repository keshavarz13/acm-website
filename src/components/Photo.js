import React from 'react'
import "./styles/gallery.css"
class Photo extends React.Component { 
    constructor() { 
        super() 
        this.state = {
            style : { 
                filter: "brightness(0.9)",
                transform: "scale(1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        }
        this.active = this.active.bind(this)
        this.disable = this.disable.bind(this)
    }
    active() { 
        this.setState({
            style : {
                filter: "brightness(1)",
                transform: "scale(1.01)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }
    disable() { 
        this.setState({
            style : {
                filter: "brightness(0.9)",
                transform: "scale(1)",
                transitionProperty :"transform" , 
                transitionDuration: "200ms"
            }
        })
    }
    render() {
        return (
           
                <img style={this.state.style} className = "photos"  src = {process.env.REACT_APP_URL+ this.props.thumbnail}  onMouseEnter = {this.active} onMouseLeave = {this.disable} />
           
        )
    }
}

export default Photo