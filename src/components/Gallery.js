import React from "react"
import "./styles/gallery.css"
class Gallery extends React.Component { 
    constructor(){
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className = "slide-show">
                    <img className = "slid-image" src = "https://www.crockerriverside.org/sites/main/files/main-images/camera_lense_0.jpeg" />
                    <p>caption</p>
                    <img className = "left" height = "50" width = "50" src = { require("./../img/left.svg") }  />
                    <img className = "right"  height = "50" width = "50"  src = { require("./../img/right.svg") } />
                </div>
            </div>
        )
    }
}

export default Gallery 