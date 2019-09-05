import React from "react" 
import { Route } from 'react-router-dom'
import BodyP4 from "./components/BodyP4"
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import About from "./components/About"
import Footer from "./components/Footer"
import BodyP2View from "./components/BodyP2View"
import SherBoxContainer from "./components/SherBoxesContainer"
import TimeLineContainerView from "./components/TimelineContainerView"
import RegisterView from "./components/Register/RegisterView"
import PosterList from "./components/PosterList"
import PastContest from "./components/PastContest"
import ListOfTeamsStatusView from "./components/ListOfTeamsStatusView"
import DeveloperPage from "./components/DeveloperPage"
import Gallery from './components/Gallery'

class App extends React.Component {
    constructor() {
        super() 
        this.state={
            validReq: false, 
        }
        this.pastContestList = this.pastContestList.bind(this)
        this.home = this.home.bind(this)
        this.pastContestProvider = this.pastContestProvider.bind(this)
        this.pastContestMaker = this.pastContestMaker.bind(this)
    }

    pastContestProvider(data) {
        this.setState({
            pastContestData: data,
            validReq: true
        })
    }

    pastContestMaker() {
        if(this.state.validReq) {
            return(
                <PastContest data={this.state.pastContestData} />
            )
        } else {
            return(
                <PosterList pastContestProvider = {this.pastContestProvider} />
            )
            
        }
       
    }

    pastContestList() {     
        return(
            <PosterList pastContestProvider = {this.pastContestProvider} />
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
                <Header changePage = {this.changePage} />
                <Route exact path="/Register" component={RegisterView} />
                <Route exact path="/PastResult" component={this.pastContestList} />
                <Route exact path="/" component={this.home} />
                <Route exact path="/status" component={ListOfTeamsStatusView} />
                <Route exact path="/PastContest" component={this.pastContestMaker} />
                <Route exact path="/Rengo" component={DeveloperPage}/>
                <Footer/> 
                {/* <Gallery/> */}
        
            </div>
        )
    }
}

export default App