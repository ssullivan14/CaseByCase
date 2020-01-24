import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import { connect } from "react-redux";
import mapStyles from "./MapStyles";

// VARIABLES
var locations;
//getting search parameters

const searchRequest = JSON.parse(localStorage.getItem("searchRequest")) || {searchType : "state"};
var searchType = searchRequest.searchType;
console.log("SearchType: " + searchType)

const Map = () => {
  console.log(locations);
 

  return (
    <GoogleMap
      defaultZoom={searchType === "state" ? ( 7 ) : ( 10 )}
      defaultCenter={locations[0]}
      defaultOptions={{ styles: mapStyles }}
    >
      {locations.map(locations => (
        <Marker 
        key={locations.name}
        position={locations} />
      ))}
    </GoogleMap>
  );
};
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap({ persons, loading }) {
  locations = [];
  let mapLoaded = false;
  persons.forEach(person => {
    // console.log(tempKey)
    // console.log(nameKey)
;    let temp = {};
    temp["lat"] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    temp.name = person._id;
    locations.push(temp);
    // console.log(temp.name);
  });
  if (locations.length) {mapLoaded = true}
  // return locations

  // console.log(locations);

  return (
    <div style={{ width: "100%", height: "45vh" }}>
      {mapLoaded &&      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> }

    </div>
  );
}

Map.propTypes = {
  person: PropTypes.object.isRequired
};
