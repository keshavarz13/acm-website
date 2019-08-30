import React from 'react'
import axios from 'axios'
import Register from "./Register"

class RegisterView extends React.Component {
    state = {
        countries: []
    }

    fetchCountries = () => {
        axios.get("http://localhost:8000/api/countries").then (res => {
            this.setState({
                countries: res.data
            });
        });
    };

    componentDidMount() {
        this.fetchCountries();
    }

    render() {
        return (<Register data={this.state.countries}/>)
    }
}

export default RegisterView