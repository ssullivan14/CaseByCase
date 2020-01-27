import React from "react";
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
const searchRequest = JSON.parse(localStorage.getItem("searchRequest")) || {
  searchType: "state"
};
var searchType = searchRequest.searchType;

const Map = () => {
  console.log(locations);
  console.log(locations[0]);
// { lat: 34.0390107, lng: -118.2672801 } - Good
// { lat: -122.4001337, lng: 37.71790817 } - Bad
// { lat: 37.71790817, lng: -122.4001337 } - fixed
  return (
    <GoogleMap
      defaultZoom={searchType === "state" ? 7 : 10}
      defaultCenter={locations[0]}
      defaultOptions={{ styles: mapStyles }}
    >
      {locations.map(locations => (
        <Marker position={locations} />
      ))}
    </GoogleMap>
  );
};
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap({ persons, loading }) {
  locations = [];
  let mapLoaded = false;

    // console.log(persons);

  persons.forEach(person => {

    // console.log(String(person.latitude));
    // console.log(String(person.longitude));
    // console.log(person.latitude);
    // console.log(person.longitude);
    // console.log(person._id);
    
    //Builds Object for Marker Positions > Pushes to Locations variable
    let temp = {};
    temp["lat"] = parseFloat(person.latitude);
    temp["lng"] = parseFloat(person.longitude);
    // temp.name = person._id;
    locations.push(temp);

  });
  if (locations.length) {
    mapLoaded = true;
  }

  return (
    <div style={{ width: "100%", height: "40vh" }}>
      {mapLoaded && (
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )}
    </div>
  );
}

Map.propTypes = {
  person: PropTypes.object.isRequired
};
