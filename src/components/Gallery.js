import React from "react"
import "./styles/gallery.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';

class Gallery extends React.Component { 
    constructor(){
        super()
        this.state = {
            slideStyles :{
                display : "none",
            }

        }
    }

    render() {
        return (
            <div>
                <div className = "slide-show" style = {this.state.slideStyles}  >
                    <img className = "slid-image" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg" />
                    <p>caption</p>
                    <ArrowBackIosIcon className = "left"/>
                    <ArrowForwardIosIcon className = "right" />
                    <CloseIcon className = "close"/>
                </div>

                <div className="gallery-container">
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg" onClick = {() => this.setState({ slideStyles :{display : "block",}})}/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                     <img className = "photos" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg"/>
                </div>
            </div>
        )
    }
}

export default Gallery 