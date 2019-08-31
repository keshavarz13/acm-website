import React from "react"  
import DeveloperCard from "./DeveloperCard";
import "./styles/poster.css"

export default class PosterList extends React.Component { 
    render () { 
        return(
            <div className = "sher-box-container2"> 
                <div className="row3">
                    <div className = "columns">
                        <DeveloperCard src1 ="https://images-na.ssl-images-amazon.com/images/I/81olhQ%2B41BL._SX466_.jpg" src2="https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354" name ="MohammadAli Keshavarz" rule ="Front-end developer" email="keshavarz.ma13@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ="https://images-na.ssl-images-amazon.com/images/I/81olhQ%2B41BL._SX466_.jpg" src2="https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354" name ="MohammadAli Keshavarz" rule ="Front-end developer" email="keshavarz.ma13@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ="https://images-na.ssl-images-amazon.com/images/I/81olhQ%2B41BL._SX466_.jpg" src2="https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354" name ="MohammadAli Keshavarz" rule ="Front-end developer" email="keshavarz.ma13@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ="https://images-na.ssl-images-amazon.com/images/I/81olhQ%2B41BL._SX466_.jpg" src2="https://vignette.wikia.nocookie.net/despicableme/images/c/ca/Bob-from-the-minions-movie.jpg/revision/latest?cb=20151224154354" name ="MohammadAli Keshavarz" rule ="Front-end developer" email="keshavarz.ma13@gmail.com" />
                    </div>
                </div>  
                
            </div>
        )
    }
}

