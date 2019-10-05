import React from "react"
import "./styles/successfulRegisteration.css"

class successfulRegistration extends React.Component {
    render(){
        return(
            <div className="successful-registration"> 
                <img src = "https://image.flaticon.com/icons/svg/190/190411.svg" width="200" height="200"/>
                <h1>
                    Your registration was successful :)
                </h1>
                <div>
                    Registration Status
                </div>
            </div>
        )
    }
}

export default successfulRegistration