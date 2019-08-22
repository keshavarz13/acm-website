import React from "react" 
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import BodyP2 from "./components/BodyP2"
import About from "./components/About"

import SherBoxContainer from "./components/SherBoxesContainer"

class App extends React.Component { 
    render(){
        return(
            <div>
                {/* <Header/> */}
                <BodyP1/>
                <SherBoxContainer/>
                <BodyP2/>
                <About/>

                
            </div>
          
        )
    }
}

export default App