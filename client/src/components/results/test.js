import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";

function Map() {



  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      defaultOptions={{ styles: mapStyles }}
    >

    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
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



import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
} from "react-google-maps";

import { connect } from "react-redux";
import mapStyles from "./MapStyles";



const Map = ({ persons, loading }) => {    

    // VARIABLES
    var locations = [];
persons.forEach(person => {
    var temp = {};                                
    temp['lat'] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    locations.push(temp);
    // zoomOption = 10;
    // centerOption = locations[0];
    console.log(temp);
    
});
console.log(locations);

    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={locations[0]}
          defaultOptions={{ styles: mapStyles }}
        />
    );
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

GMap.propTypes = {
  person: PropTypes.object.isRequired
};

export default function GMap() {
  return (
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
  
