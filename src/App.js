import React from "react" 
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"

class App extends React.Component { 
    render(){
        return(
            <div>
                <Header/>
                <BodyP1/>
            </div>
          
        )
    }
}

export default App