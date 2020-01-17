4import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript } from '@react-google-maps/api';         
import { connect } from "react-redux";
// import "./MapStyle.css";



const GMap = ({ persons, loading }) => {    

    // VARIABLES
    var locations = [];
    var zoomOption;
    var centerOption = {};

persons.forEach(person => {
    var temp = {};                                
    temp['lat'] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    locations.push(temp);
    zoomOption = 10;
    centerOption = locations[0];
    console.log(temp);
    
});
console.log(locations);




    return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBut6rvhLZm-6aFYXPzICjQ-V4caIfxS2U"
      >
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            width: '100%',
            height: '25%'
          }}
          zoom={7}
          center={{            
            lat: parseInt(-37.765015),
            lng: parseInt(145.133858)
          }}
        />
      </LoadScript>    
    )
}


GMap.propTypes = {
    person: PropTypes.object.isRequired
  };
  
  export default GMap;