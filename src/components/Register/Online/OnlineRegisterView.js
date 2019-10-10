import React from 'react'
import axios from 'axios'
import OnlineRegister from "./OnlineRegister"

class OnlineRegisterView extends React.Component {
    state = {
        countries: []
    }

    fetchCountries() {
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
            <OnlineRegister data={this.state.countries}/>
        )
    }
}

export default OnlineRegisterView