import React from 'react'
import axios from 'axios'
import Register from "./Register"
import OnlineRegister from "./OnlineRegister"

class RegisterView extends React.Component {
    state = {
        countries: []
    }

    fetchCountries = () => {
        axios.get(process.env.REACT_APP_URL+"/api/countries").then (res => {
            this.setState({
                countries: res.data
            });
        });
    };

    componentDidMount() {
        this.fetchCountries();
    }

    render() {
        return (
            <div>
                <Register data={this.state.countries}/>
                <OnlineRegister data={this.state.countries}/>
            </div>
        )
    }
}

export default RegisterView