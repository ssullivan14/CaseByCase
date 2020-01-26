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
import Geocode from "react-geocode";
Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_KEY}`);
Geocode.setLanguage("en");
Geocode.setRegion("us");

// VARIABLES
var locations;
//getting search parameters

const searchRequest = JSON.parse(localStorage.getItem("searchRequest")) || {
  searchType: "state"
};
var searchType = searchRequest.searchType;
var geoCity = searchRequest.location;
// console.log("SearchType: " + searchType);




export default function GMap({ persons, loading }) {
  locations = [];
  let mapLoaded = false;
  const Map = () => {
    const [selectCase, setSelectedCase] = useState();
    console.log(locations);
  
    return (
      <GoogleMap
        defaultZoom={searchType === "state" ? 7 : 10}
        defaultCenter={locations[0]}
        defaultOptions={{ styles: mapStyles }}
      >
        {locations.map(locations => (
          <Marker key={locations.name} position={locations} />
        ))}
      </GoogleMap>
    );
  };
  const MapWrapped = withScriptjs(withGoogleMap(Map));

  console.log(persons);

  persons.forEach(person => {

  //   console.log(String(person.latitude));
  //   console.log(String(person.longitude));
    console.log(person.latitude);
    console.log(person.longitude);
    console.log(person._id);
    
    // console.log(tempKey)
    // console.log(nameKey)
    
    //Missing Person
    let temp = {};
    temp["lat"] = parseFloat(person.latitude);
    temp["lng"] = parseFloat(person.longitude);
    temp.name = person._id;
    locations.push(temp);
    
    //Crime
    // console.log(person.Block);

    //Unidentified

  });
  if (locations.length) {
    mapLoaded = true;
  }
  // return locations

  // console.log("locations: " + locations);

  return (
    <div style={{ width: "100%", height: "45vh" }}>
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
