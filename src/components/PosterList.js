import React from "react"  
import poster from "./poster"
import Poster from "./poster";
import "./styles/poster.css"

class PosterList extends React.Component { 
    constructor()  { 
        super() 
        this.state = {
            data :[
                {
                    poster : "http://icpc.sharif.edu/2018/images/poster.png" , 
                    year : "2018",
                    scoreBoard :"http://irsv.upmusics.com/Downloads/Musics/Reza%20Sadeghi%20-%20Shahr%20Ashoob%20(128).mp3" , 
                    question : "" , 
                    images : 
                        [{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        }]
                },{
                    poster : "http://icpc.sharif.edu/2018/images/poster.png" , 
                    year : "2018",
                    scoreBoard :"2" , 
                    question : "" , 
                    images : 
                        [{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        }]
                },{
                    poster : "http://icpc.sharif.edu/2018/images/poster.png" , 
                    year : "2018",
                    scoreBoard :"3" , 
                    question : "" , 
                    images : 
                        [{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        }]
                },{
                    poster : "http://icpc.sharif.edu/2018/images/poster.png" , 
                    year : "2018",
                    scoreBoard :"4" , 
                    question : "" , 
                    images : 
                        [{
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        },
                        {
                            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                            thumbnailWidth: 320,
                            thumbnailHeight: 212,
                            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                            caption: "Boats (Jeshu John - designerspics.com)"
                        }]
                },
            ] 
               
            
        }
    }

    render () { 
        const posters = this.state.data.map((contest) => <div className = "column"><Poster contest={contest} pastContestProvider = {this.props.pastContestProvider}/></div>)
        return(
            <div className = "sher-box-container"> 
                <div className="row">
                    {posters}
                </div>  
                
            </div>
        )
    }
}

export default PosterList