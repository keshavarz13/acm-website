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


class App extends React.Component { 
    constructor() {
        super() 
        this.state={
            p : 0 
        }
        this.changePage = this.changePage.bind(this)
    }

    changePage(number) {
        this.setState({p:number})
        alert(this.state.p)
    }

    render() {
        return(
            <div>
                <Header changePage = {this.changePage}/>
                <BodyP1/>
                <SherBoxContainer/>
                <BodyP2View/>
                <About/>
                <TimeLineContainerView/>
                <Register />
                <BodyP4/>
                <Footer/>
            </div>
        )
    }
}

export default App