import React from "react"  
import DeveloperCard from "./DeveloperCard";
import "./../../styles/poster.css"

export default class PosterList extends React.Component { 
    render () { 
        return(
            <div className = "sher-box-container2"> 
                <div className="row3">
                    <div className = "columns">
                        <DeveloperCard src1 ={require("./../../../img/mmd1.jpg")} src2={require("./../../../img/mmd2.jpg")} name ="MohammadAli Keshavarz" rule ="Front-end developer" email="keshavarz.ma13@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ={require("./../../../img/ali1.jpg")} src2={require("./../../../img/ali2.jpg")} name ="Ali Nazari" rule ="Front-end developer" email="ali.nazari.porfosor2@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ={require("./../../../img/erfan1.jpg")} src2={require("./../../../img/erfan2.jpg")} name ="Erfan Abedi" rule ="Back-end developer" email="pseudoerfan@gmail.com" />
                    </div>
                    <div className = "columns">
                        <DeveloperCard src1 ={require("./../../../img/javad1.jpg")} src2={require("./../../../img/javad2.jpg")} name ="MohmmadJavad Ardestani" rule ="Back-end developer" email="mjavad.ardestani00@gmail.com" />
                    </div>
                </div>  
                
            </div>
        )
    }
}

