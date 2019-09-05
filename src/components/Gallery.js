import React from "react"
import "./styles/gallery.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import Photo from "./Photo"

class Gallery extends React.Component { 
    constructor(){
        super()
        this.state = {
            allImage : [],
            teamsImage : [],
            staffsImage : [],
            images : 
            [{
                src: "",
                thumbnail: "",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [],
                caption: ""
            }],
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
        this.setState({allImage : this.props.images})
        var staffs = [] 
        var teams = [] 
        for(i = 0 ; i <this.props.images.length ; i++){
            if(this.props.images[i].category === "staff" )
                staffs.concat(this.props.images[i])
            else if(this.props.images[i].category === "team" )
                teams.concat(this.props.images[i])
        }
        this.setState({staffsImage : staffs})
        this.setState({teamsImage : teams})
    }

    hide() { 
        this.setState({
            slideStyles :{
                display : "none",
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
        if(this.state.tab == 0){
            this.setState({images : this.state.allImage})
        }
        const photosList = this.state.images.map((photo , index) =>  <div   onClick = {() => this.setState({ slideStyles :{display : "block"}, Pindex :index })}><Photo thumbnail = {photo.thumbnail}/></div>)
        return (
            <div>
                <div className = "slide-show" style = {this.state.slideStyles}  >
                    <div className="caounter">{this.state.Pindex +1}/{this.state.images.length}</div>
                    <img className = "slid-image" src = {this.state.images[this.state.Pindex].src} />
                    <p>{this.state.images[this.state.Pindex].caption}</p>
                    <ArrowBackIosIcon className = "left" onClick = {this.prev}/>
                    <ArrowForwardIosIcon className = "right" onClick = {this.next}/>
                    <CloseIcon className = "close" onClick = {this.hide}/>
                </div>

                <div className="gallery-container">
                    {photosList}
                </div>
            </div>
        )
    }
}

export default Gallery 