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
          lat: parseFloat(persons.latitude),  
          lng: parseFloat(persons.longitude)
        }}
        defaultOptions={{ styles: mapStyles }}
      >
        {
          <Marker position={{ 
            lat: parseFloat(persons.latitude), 
            lng: parseFloat(persons.longitude)
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
    <div className="row">
    <div className="col-md-12" style={{ width: "100vw", height: "250px", paddingBottom :"25px", paddingTop : "25px" }}>
      {
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
     
        }
    </div>
    </div>
  );
}

Map.propTypes = {
  person: PropTypes.object.isRequired
};
