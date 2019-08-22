import React from 'react' 
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapBox extends React.Component { 
   
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                    style={{
                        width : "300px",
                        height : "300px"
                    }}
                />
                
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapBox);
