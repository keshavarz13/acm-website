import React from "react" 
import { Route } from 'react-router-dom'
import BodyP4 from "./components/Main Page/BodyP4"
import Header from "./components/Header"
import BodyP1 from "./components/Main Page/BodyP1"
import About from "./components/Main Page/About"
import Footer from "./components/Footer/Footer"
import BodyP2View from "./components/Main Page/BodyP2View"
import SherBoxContainer from "./components/Main Page/SherBox/SherBoxesContainer"
import TimeLineContainerView from "./components/Main Page/Timeline/TimelineContainerView"
import RegisterView from "./components/Register/On-Site/RegisterView"
import PosterList from "./components/PosterList"
import ListOfTeamsStatusView from "./components/ListOfTeamsStatusView"
import DeveloperPage from "./components/Footer/Developers/DeveloperPage"
import RegisterMenu from './components/Register/RegisterMenu'
import OnlineRegisterView from './components/Register/Online/OnlineRegisterView'
import PastContestContainer from './components/PastContestContainer'
import successfulRegistration from "./components/Register/Successful Registration/successfulRegistration"
import successfulRegistration2 from "./components/Register/Successful Registration/successfulRegistration2"

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
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
                <PastContestContainer data={this.state.pastContestData} />
            )
        } else {
            return(
                <PosterList pastContestProvider={this.pastContestProvider} />
            )
        }
    }

    pastContestList() {     
        return(
            <PosterList pastContestProvider={this.pastContestProvider} />
        )
    }

    home() { 
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
                <Header changePage={this.changePage} />
                <Route exact path="/onsiteRegister" component={RegisterView} />
                <Route exact path="/onlineRegister" component={OnlineRegisterView} />
                <Route exact path="/Register" component={RegisterMenu} />
                <Route exact path="/PastResult" component={this.pastContestList} />
                <Route exact path="/" component={this.home} />
                <Route exact path="/status" component={ListOfTeamsStatusView} />
                <Route exact path="/PastContest" component={this.pastContestMaker} />
                <Route exact path="/Rengo" component={DeveloperPage}/>
                <Route exact path="/successfulRegistration" component={successfulRegistration}/>
                <Route exact path="/successfulRegistration2" component={successfulRegistration2}/>
                <Footer/> 
            </div>
        )
    }
}

export default App