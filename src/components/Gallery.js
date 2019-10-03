import React from "react"
import "./styles/gallery.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import Photo from "./Photo"

class Gallery extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            style1 : {
                backgroundColor : "#2f5725",
            },
            style2 : {
                backgroundColor : "#222a20",
            },
            style3 : {
                backgroundColor : "#222a20",
            },
            style4 : {
                backgroundColor : "#222a20",
            },
           
            images : props.images,
            slideStyles :{
                display : "none",
            } , 
            photoStyle : {
                filter: "brightness(1)"
            },
            Pindex : 0 ,
            tab : 0 , 

        }
        this.hide = this.hide.bind(this)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    componentDidMount() { 
        // this.setState({imga : this.props.images})
        this.setState({allImage : this.props.images})
        this.setState({images : this.props.images})
       
      
    }

    componentWillReceiveProps(nextProps){
        this.setState({images : nextProps.images})
    }

    hide() { 
        this.setState({
            slideStyles :{
                display : "none",
                Pindex : 0  
            }
        })
    }

    next() { 
        if(this.state.Pindex != this.state.images.length -1 )
            this.setState(
                {
                    Pindex : this.state.Pindex + 1
                }
            )
    }

    prev() { 
        if(this.state.Pindex != 0)
        this.setState(
            {
                Pindex : this.state.Pindex - 1
            }
        )
    }

    render() {
        console.log(this.state.images)
        const photosList = this.state.images.map((photo , index) =>  <div className="single-photo-container"  onClick = {() => this.setState({ slideStyles :{display : "block"}, Pindex :index })}><Photo thumbnail = {photo.thumbnail_url}/></div>)
        return (
            <div>
                <div className = "slide-show" style = {this.state.slideStyles}  >
                    <div className="caounter">{this.state.Pindex +1}/{this.state.images.length}</div>
                    <img className = "slid-image" src = {process.env.REACT_APP_URL+this.state.images[this.state.Pindex].src} />
                    <p>{this.state.images[this.state.Pindex].caption}</p>
                    <div className = "left">
                         <ArrowBackIosIcon  onClick = {this.prev}/>
                    </div>
                    <div className = "right">
                         <ArrowForwardIosIcon  onClick = {this.next}/>
                    </div>
                   
                    <CloseIcon className = "close" onClick = {this.hide}/>
                </div>

                <div className = "tabs">
                        <p style ={this.state.style1} onClick = {()=>{this.setState({images : [].concat(this.props.staffs).concat(this.props.other).concat(this.props.teams),Pindex : 0 ,
                        style1 : {
                            backgroundColor : "#2f5725"
                        },
                        style2 : {
                            backgroundColor : "#222a20",
                        },
                        style3 : {
                            backgroundColor : "#222a20",
                        },
                        style4 : {
                            backgroundColor : "#222a20",
                        },
                        })}}>ALL</p>
                        <p style ={this.state.style2} onClick = {()=>{this.setState({images : [].concat(this.props.staffs),Pindex : 0 ,
                        style1 : {
                            backgroundColor : "#222a20"
                        },
                        style2 : {
                            backgroundColor : "#2f5725",
                        },
                        style3 : {
                            backgroundColor : "#222a20",
                        },
                        style4 : {
                            backgroundColor : "#222a20",
                        },})}}>STAFFS</p>
                        <p style ={this.state.style3} onClick = {()=>{this.setState({images : [].concat(this.props.teams),Pindex : 0 ,
                        style1 : {
                            backgroundColor : "#222a20"
                        },
                        style2 : {
                            backgroundColor : "#222a20",
                        },
                        style3 : {
                            backgroundColor : "#2f5725",
                        },
                        style4 : {
                            backgroundColor : "#222a20",
                        },})}}>TEAMS</p>
                        <p style ={this.state.style4} onClick = {()=>{this.setState({images : [].concat(this.props.other),Pindex : 0 ,
                        style1 : {
                            backgroundColor : "#222a20"
                        },
                        style2 : {
                            backgroundColor : "#222a20",
                        },
                        style3 : {
                            backgroundColor : "#222a20",
                        },
                        style4 : {
                            backgroundColor : "#2f5725",
                        },})}}>OTHER</p>
                </div>

                <div className="gallery-container">
                    {photosList}
                </div>
            </div>
        )
    }
}

export default Gallery 