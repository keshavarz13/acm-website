import React from "react" 
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import BodyP2 from "./components/BodyP2"
import About from "./components/About"
import Footer from "./components/Footer"
import TimelineContainer from "./components/TimelineContainer"
import SherBoxContainer from "./components/SherBoxesContainer"
import BodyP4 from "./components/BodyP4"
import Register from "./components/Register/Register"

class App extends React.Component { 
    constructor(){
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

    render(){
        return(
            <div>
                <Header changePage = {this.changePage}/>
                <BodyP1/>
                <SherBoxContainer/>
                <BodyP2/>
                <About/>
                <TimelineContainer/>
                <BodyP4/>
                <Footer/>
                 {/* <Register /> */}
            </div>
        )
    }
}

export default App