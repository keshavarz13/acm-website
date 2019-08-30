import React from "react"
import "./styles/developer-page.css"
import transitions from "@material-ui/core/styles/transitions";

export default class DeveloperPage extends React.Component { 
    constructor (){
        super() 
        this.state ={
            flag : 0,
            src :"",
            styles : {
                transform: "scale(1.0)",
            }
        }
        this.hoverHandler = this.hoverHandler.bind(this)
        this.unHoverHandler = this.unHoverHandler.bind(this)
    }
    componentDidMount(){
        this.setState({
            src : this.props.src1
        })
    }
    hoverHandler(){
        this.setState({
            src : this.props.src2
        })
    }

    unHoverHandler(){
        this.setState({
            src : this.props.src1 
        })
    }
    render() {
        return (
            <div className="developer-card">
                <img src={this.state.src}  onMouseEnter ={this.hoverHandler} onMouseLeave={this.unHoverHandler}/>
                <h5>{this.props.name}</h5>
                <h6>{this.props.rule}</h6>
                <h4>Email : <span>{this.props.email}</span></h4>
                
            </div>
        )
    }
}