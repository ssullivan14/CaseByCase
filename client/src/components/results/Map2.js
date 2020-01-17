import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./MapStyle.css";

const Map = ({ persons, loading }) => {
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



    // var temp = {};                                
    // temp['lat'] = parseFloat(person.latitude);
    // temp["lng"] = parseFloat(person.longitude);
    // locations.push(temp);

    // re-creating map centered / zoomed on location[0]
    // console.log(locations);
    // zoomOption = 10;
    // centerOption = locations[0];
    // initMap();



  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBut6rvhLZm-6aFYXPzICjQ-V4caIfxS2U&callback=initMap";
    script2.async = true;
    script2.defer = true;
    script2.innerHTML =`
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    
    });
    
    `
    document.body.appendChild(script2);

    // const script3 = document.createElement("script");
    // script3.innerHTML =`
    // var map = new google.maps.Map(document.getElementById("map"), options);

    // // Create an array of alphabetical characters used to label the markers.
    // var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // // Add some markers to the map.
    // // Note: The code uses the JavaScript Array.prototype.map() method to
    // // create an array of markers based on a given "locations" array.
    // // The map() method here has nothing to do with the Google Maps API.
    // var markers = locations.map(function(location, i) {
    //   return new google.maps.Marker({
    //     position: location,
    //     label: labels[i % labels.length]
    //   });
    // });

    // // Add a marker clusterer to manage the markers.
    // var markerCluster = new MarkerClusterer(map, markers, {
    //   imagePath:
    //     "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    
    // });
    
    // `

    // document.body.appendChild(script3);

  }, []);

  function initMap() {
    var mapZoom = zoomOption;
    var mapCenter = centerOption;

    var options = {
      zoom: mapZoom,
      center: mapCenter,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }]
        }
      ]
    };

    initMap()
  }
  return <span id="map"></span>;
};

Map.propTypes = {
  person: PropTypes.object.isRequired
};

export default Map;
