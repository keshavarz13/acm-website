import React from "react" 
import BodyP4 from "./components/BodyP4"
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import About from "./components/About"
import Footer from "./components/Footer"
import BodyP2View from "./components/BodyP2View"
import SherBoxContainer from "./components/SherBoxesContainer"
import TimeLineContainerView from "./components/TimelineContainerView"
import Register from "./components/Register/Register"
import Poster from "./components/poster"
import PosterList from "./components/PosterList"
import PastContest from "./components/PastContest"

import { Route } from 'react-router-dom'






class App extends React.Component {
    constructor(){
        super() 
        this.state={
            pastContestData : {}
        }
        this.pastContestList = this.pastContestList.bind(this)
        this.home = this.home.bind(this)
        this.pastContestProvider = this.pastContestProvider.bind(this)
        this.pastContestMaker = this.pastContestMaker.bind(this)
    }


    pastContestProvider(data){
        this.setState(
            this.pastContest = data
        )
        console.log(this.state)
    }

    pastContestMaker(){
        return(
            <PastContest data = {this.state.pastContestData}/>
        )
    }
    pastContestList() { 
        return(
            <PosterList pastContestProvider = {this.pastContestProvider}/>
        )
        
    }

    
    home () { 
        return(
            <div>
                <BodyP1/>
                <SherBoxContainer/> 
                <BodyP2View/>
                <About/>
                <TimeLineContainerView/>
                <BodyP4/>
            </div>
        
        )
    }
    

    render() {
        return(
            <div>
                <Header changePage = {this.changePage}/>
                <Route exact path="/Register" component={Register} />
                <Route exact path="/PastResult" component={this.pastContestList} />
                <Route exact path="/" component={this.home} />
                <Route exact path="/PastContest" component={this.pastContestMaker}/>
                <Footer/>
        
            </div>
        )
    }
}

export default App