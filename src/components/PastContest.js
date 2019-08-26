import React from "react"
import Gallery from 'react-grid-gallery';
import "./styles/past-contest.css"



class PastContest extends React.Component { 
    render(){
        return(
            <div style = { {height : "800px",
            marginTop : "90px"
            }}>
                <Gallery images={this.props.data.images}/>
            </div>
        )
    }
}

export default PastContest