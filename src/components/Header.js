import React from "react" 

class Header extends React.Component { 
    render(){
      return(
        <div>
            <div className = "container">
                <a href="#">Home</a>
                <a href="#" >Post Result</a>
                <a href="#">About</a>
                <img src="http://icpc.aut.ac.ir/img/aut_icpc.png" />
            </div>
        </div>
      )
    }
}

export default Header