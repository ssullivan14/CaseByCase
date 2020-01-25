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

export default function GMap({ persons, loading }) {
  locations = [];
  let mapLoaded = false;

  
  persons.forEach(person => {
    // console.log(tempKey)
    // console.log(nameKey)
    
    //Missing Person
    let temp = {};
    temp["lat"] = parseFloat(person.Latitude);
    temp["lng"] = parseFloat(person.Longitude);
    temp.name = person._id;
    locations.push(temp);
    
    //Crime
    console.log(person.Block);

 Geocode.fromAddress(person.Block + geoCity).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          locations.push({ lat, lng });
          console.log({ lat, lng });
        },
        // error => {
        //   console.error(error);
        // }
      )
    


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
