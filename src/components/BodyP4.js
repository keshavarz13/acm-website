import React from 'react';
import axios from 'axios';
import "./styles/sponsor.css"



class BodyP4 extends React.Component { 

    state = {
        poster: null,
        sponsor: null
    }

    fetchCurrentContest = () => {
        let apiUrl = process.env.REACT_APP_URL;
        apiUrl += "/api/current";
        axios.get(apiUrl).then(res => {
            this.setState({
                poster: res.poster,
                sponsor: res.sponsor
            });
        });
    };

    componentDidMount() { 
        this.fetchCurrentContest()
    }
    
    render() {


        return (
            <div className = "part4-container">
                 <div className = "new-poster" >
                        <img src="http://icpc.sharif.edu/2018/images/poster.png" width="300" height="400"/>
                </div>
                <div className= "part4-inner-container">
                    <div className = "sponsor-box">
                        <h1>Event Sponsor</h1>
                        <div className="line"></div>
                        <div className="sponsor-image"> <img src={require ("./../img/sponsor.png") } width ="250" height="250" /></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BodyP4