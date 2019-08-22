import React from "react" 
import Header from "./components/Header"
import BodyP1 from "./components/BodyP1"
import SherBox from "./components/SherBox"

class App extends React.Component { 
    render(){
        return(
            <div>
                <Header/>
                <BodyP1/>
                <div>
                    <SherBox/>
                    <SherBox/>
                    <SherBox/>
                </div>
                
            </div>
          
        )
    }
}

export default App