import React from 'react';
import axios from 'axios';
import "./styles/sponsor.css"

class BodyP4 extends React.Component { 

    state = {
        poster: null,
        sponsor: null
    }

    fetchCurrentContest() {
        let apiUrl = process.env.REACT_APP_URL + "/api/current";
        axios.get(apiUrl).then(res => {
            this.setState({
                poster: res.data[0].poster,
                sponsor: res.data[0].sponsor
            })
        }).catch(error => {
            console.log(error);
            if(error.response)
                console.log(error.response);
        })
    };

    componentDidMount() { 
        this.fetchCurrentContest()
    }
    
    render() {
        return (
            <div className="part4-container">
                 <div className="new-poster" >
                        <img 
                            src={process.env.REACT_APP_URL + this.state.poster} 
                            width="300" height="400"
                        />
                </div>
                <div className="part4-inner-container">
                    <div className="sponsor-box">
                        <h1>Event Sponsor</h1>
                        <div className="line"/>
                        <div className="sponsor-image">
                            <img 
                                src={process.env.REACT_APP_URL + this.state.sponsor} 
                                width ="250" height="250"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BodyP4