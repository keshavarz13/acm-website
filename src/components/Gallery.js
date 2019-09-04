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
            images : 
            [{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "http://icpc.sharif.edu/2018/images/poster.png",
                thumbnail: "http://icpc.sharif.edu/2018/images/poster.png",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "slm"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },{
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspics.com)"
            },
            {
                src: "https://codecup.ir/static/codecup4/images/photos/768/3-8.2b4e4609debd.jpg",
                thumbnail: "https://codecup.ir/static/codecup4/images/photos/768/3-8.2b4e4609debd.jpg",
                thumbnailWidth: 400,
                thumbnailHeight: 300,
                tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "khodafeziii"
            }],
            slideStyles :{
                display : "none",
            } , 
            photoStyle : {
                filter: "brightness(1)"
            },
            Pindex : 0 ,

        }
        this.hide = this.hide.bind(this)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    componentDidMount() { 
        this.setState({images : this.props.images})
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