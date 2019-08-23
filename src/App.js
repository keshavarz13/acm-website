import React from "react" 
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import BodyP2 from "./components/BodyP2"
import About from "./components/About"
import Footer from "./components/Footer"
import TimelineContainer from "./components/TimelineContainer"
import SherBoxContainer from "./components/SherBoxesContainer"
import Register from "./components/Register/Register"

class App extends React.Component { 
    render(){
        return(
            <div>
                <Header/>
                <BodyP1/>
                <SherBoxContainer/>
                <BodyP2/>
                <About/>
                <TimelineContainer/>
                {/* <Register /> */}
                <Footer/>
            </div>
          
        )
    }
}

export default App