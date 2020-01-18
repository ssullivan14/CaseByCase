4import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, withScriptjs,withGoogleMap } from 'react-google-maps';         
import { connect } from "react-redux";
import mapStyles from "./MapStyles";

    // VARIABLES
    var locations = [];
    var zoomOption;
    var centerOption = {};
    console.log(locations[0]);


const Map = ({ persons, loading }) => {    


    return (
 
        <GoogleMap
          defaultZoom={10}
          defaultCenter={locations[0]}
          defaultOptions={{ styles: mapStyles }}
          
        />
    )
}
const MapWrapped = withScriptjs(withGoogleMap());

export default function GMap({ persons, loading }) {
persons.forEach(person => {
    let temp = {};                                
    temp['lat'] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    locations.push(temp);
    zoomOption = 10;
    centerOption = locations[0];
    // console.log(temp);
        
});
// return locations

console.log(locations);


  return  (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

    </div>
  );

}

Map.propTypes = {
    person: PropTypes.object.isRequired
  };
  
