import React from "react"
// import "./styles/body-style.css"
// import "./styles/countdown-style.css"
// import "./countdown"
import axios from "axios"
import BodyP2 from "../components/BodyP2"

class BodyP2View extends React.Component { 

    state = {   
        countdowns: null
    }

    fetchCountdownItem = () => {
        axios.get("http://localhost:8000/api/countdowns/1").then(res => {
            this.setState({
                countdowns: res.data
            });
            // console.log(res.data)
        });
    };

    componentDidMount() {
        this.fetchCountdownItem();
    }

    render() {
        // console.log(this.state.countdowns)
        if (!this.state.countdowns) {
            return <div/>

        }
        // document.
        return (
            <BodyP2 data={this.state.countdowns}></BodyP2>
        )
    }
}

export default BodyP2View