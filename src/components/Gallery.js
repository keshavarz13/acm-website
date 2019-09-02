import React from "react"
import "./styles/gallery.css"
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
                <div className = "slide-show" style = {this.state.slideStyles}>
                    <img className = "slid-image" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg" />
                    <p>caption</p>
                    <img className = "left" height = "50" width = "50" src = { require("./../img/left.svg") }  />
                    <img className = "right"  height = "50" width = "50"  src = { require("./../img/right.svg") } />
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