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

import { Route } from 'react-router-dom'

function home () { 
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


class App extends React.Component {

    render() {
        return(
            <div>
                <Header changePage = {this.changePage}/>
                <Route exact path="/Register" component={Register} />
                <Route exact path="/PastResult" component={PosterList} />
                <Route exact path="/" component={home} />
                <Footer/>
        
            </div>
        )
    }
}

export default App