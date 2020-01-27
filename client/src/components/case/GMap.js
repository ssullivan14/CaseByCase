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





export default function GMap({ persons }) {
  locations = [];
  let mapLoaded = false;

  console.log(persons);
  console.log(persons.latitude);
  console.log(persons.longitude);
  // persons.forEach(person => {})

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ 
          lat: persons.latitude, 
          lng: persons.longitude
        }}
        defaultOptions={{ styles: mapStyles }}
      >
        {
          <Marker position={{ 
            lat: persons.latitude, 
            lng: persons.longitude
          }} />
        }
      </GoogleMap>
    );
  };
const MapWrapped = withScriptjs(withGoogleMap(Map));
  //   // Builds Object for Marker Positions > Pushes to Locations variable
  //   let temp = {};
  //   temp["lat"] = parseFloat(person.latitude);
  //   temp["lng"] = parseFloat(person.longitude);
  //   // temp.name = person._id;
  //   locations.push(temp);

 

  return (
    <div style={{ width: "45vw", height: "45vh", float: "right", overflow: "auto", marginBottom: "50px" }}>
      {
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
     
        }
    </div>
  );
}

Map.propTypes = {
  person: PropTypes.object.isRequired
};
