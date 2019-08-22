

import React from "react"

class Map extends React.Component { 
   
    myMap() {
        var mapProp= {
            center:new google.maps.LatLng(51.508742,-0.120850),
            zoom:5,
        };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    
    render() {  
        return (
            <div id="googleMap" style="width:100%;height:400px;"></div>

            
            
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"></script>
        );
    }
}
export default Map
      


