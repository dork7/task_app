import React, { useCallback, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { Box, Text, Badge } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
  geocodeByLatLng,
} from "react-google-places-autocomplete";

const mapBoxAccessToken =
  "pk.eyJ1IjoieGVlNDI1IiwiYSI6ImNsMHdmZGZoczEwdWQzZG4xOWwyNWRkMW0ifQ.pGnLWGI9tWOTNcqdt3HxOw";
const Map = () => {
  const [userLoc, setUserLoc] = useState({
    latitude: 33.6844,
    longitude: 73.0479,
  });
  const [viewport, setViewport] = useState({
    width: 720,
    height: 480,
    latitude: 33.6844,
    longitude: 73.0479,
    zoom: 10,
  });
  const [userAddress, setUserAddress] = useState(null);
  const [latLongFromMarker, setLatLongFromMarker] = useState([]);

  const updateLocation = useCallback((e) => {
    console.log("UpdateLoc ", e);

    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setUserLoc((prev) => ({ ...prev, latitude: lat, longitude: lng }));
        setViewport((prev) => ({ ...prev, latitude: lat, longitude: lng }));
        setUserAddress(e);
      })
      .catch((err) => console.error(err));
    console.log(userLoc);
    console.log(e, "updateLoc");
    //   setUserLoc({latitude, longitude})
  }, []);

  const onMarkerDragEnd = useCallback((e) => {
    setUserLoc((prev) => ({
      ...prev,
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
    }));

    geocodeByLatLng({ lat: e.lngLat[1], lng: e.lngLat[0] })
      .then((results) => {
        // Trigger Rerender
        console.log("results", results);
        setLatLongFromMarker(results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyBrHdDn6EVan8yCd--8KCTBKL0C0aruRj0"
        selectProps={{
          onChange: (val, { action }) => {
            if (action === "select-option") updateLocation(val);
          },

          value: userAddress,
          controlShouldRenderValue: true,

          placeholder: "Start Typing an Address",
        }}
      />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={mapBoxAccessToken}
        mapboxAccessToken={mapBoxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
      >
        <Marker
          draggable
          onDragEnd={onMarkerDragEnd}
          latitude={userLoc.latitude}
          longitude={userLoc.longitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <FaMapMarkerAlt color="red" size="30" />
        </Marker>
      </ReactMapGL>
      <Text>Marker Results</Text>
      <Box w="md">
        {latLongFromMarker?.map((address) => (
          <Badge>{address.formatted_address}</Badge>
        ))}
      </Box>
    </>
  );
};

export default Map;
