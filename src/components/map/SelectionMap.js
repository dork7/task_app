import { useEffect, useState, useRef, useCallback } from "react";

import ReactMapGL, {
  FlyToInterpolator,
  Marker,
  Popup,
  FullscreenControl,
} from "react-map-gl";
import axios from "axios";
import _, { filter } from "lodash";
import {
  Badge,
  Box,
  FormErrorMessage,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
// import {  Table } from "components/Others";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

import {
  Editor,
  DrawPolygonMode,
  EditingMode,
  DrawLineStringMode,
  RENDER_STATE,
} from "react-map-gl-draw";

function getEditHandleStyle({ feature, state }) {
  switch (state) {
    case RENDER_STATE.SELECTED:
    case RENDER_STATE.HOVERED:
    case RENDER_STATE.UNCOMMITTED:
      return {
        fill: "rgb(251, 176, 59)",
        fillOpacity: 1,
        stroke: "rgb(255, 255, 255)",
        strokeWidth: 2,
        r: 7,
      };

    default:
      return {
        fill: "rgb(251, 176, 59)",
        fillOpacity: 1,
        stroke: "rgb(255, 255, 255)",
        strokeWidth: 2,
        r: 5,
      };
  }
}
function getFeatureStyle({ feature, index, state }) {
  switch (state) {
    case RENDER_STATE.SELECTED:
    case RENDER_STATE.HOVERED:
    case RENDER_STATE.UNCOMMITTED:
    case RENDER_STATE.CLOSING:
      return {
        stroke: "rgb(251, 176, 59)",
        strokeWidth: 2,
        fill: "rgb(251, 176, 59)",
        fillOpacity: 0.3,
        strokeDasharray: "4,2",
      };

    default:
      return {
        stroke: "rgb(60, 178, 208)",
        strokeWidth: 2,
        fill: "rgb(60, 178, 208)",
        fillOpacity: 0.1,
      };
  }
}

const SelectionMap = () => {
  const reactMap = useRef(null);
  const [mode, setMode] = useState(null);
  const [polygonData, setPolygonData] = useState([]);
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);
  const editorRef = useRef(null);

  const [viewport, setViewport] = useState({
    width: 720,
    height: 480,
    latitude: 33.6844,
    longitude: 73.0479,
    zoom: 10,
  });

  const onSelect = useCallback((options) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex);
  }, []);

  const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      editorRef.current.deleteFeatures(selectedFeatureIndex);

      setPolygonData([]);
    }
  }, [selectedFeatureIndex]);

  const onUpdate = useCallback(({ editType, data }) => {
    setPolygonData(data);
    console.log("data", data);
    if (editType === "addFeature") {
      setMode(new EditingMode());
    }
  }, []);

  const updateLocation = useCallback((e) => {
    geocodeByAddress(e.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setViewport((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          transitionDuration: 2500,
          zoom: 12,
          transitionInterpolator: new FlyToInterpolator(),
        }));
      })
      .catch((err) => console.error(err));

    // console.log(e.label);
  }, []);
  const drawTools = (
    <Box className="mapboxgl-ctrl-top-left">
      <Box className="mapboxgl-ctrl-group mapboxgl-ctrl">
        <button
          disabled={polygonData.length > 0 ? true : false}
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_polygon"
          title={
            polygonData.length > 0
              ? "You can only create one area. Edit or Delete to draw again"
              : "Draw Operating Area"
          }
          onClick={() => setMode(new DrawPolygonMode())}
          type="button"
        />
        <button
          className="mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_trash"
          title="Delete Area"
          onClick={onDelete}
          type="button"
        />
      </Box>
    </Box>
  );

  return (
    <>
      <Box gridArea="leftcard" d="flex" flexDir="column">
        <GooglePlacesAutocomplete
          apiKey="AIzaSyBrHdDn6EVan8yCd--8KCTBKL0C0aruRj0"
          selectProps={{
            placeholder: "Search an Address & Draw an area on the Map",
            onChange: updateLocation,
            onKeyDown: (e) => {
              // if (e.key === "Enter") setSearch(e.target.value);
              if (e.key === "Enter") updateLocation(e);
            },
          }}
        />
      </Box>

      <Box
        gridArea="rightcard"
        h={240}
        borderWidth="1px"
        borderRadius={12}
        mt={2}
      >
        <Box w="720px" h="480px" borderRadius={12}>
          <ReactMapGL
            style={{ borderRadius: "12px", overflow: "hidden" }}
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoieGVlNDI1IiwiYSI6ImNsMHdmZGZoczEwdWQzZG4xOWwyNWRkMW0ifQ.pGnLWGI9tWOTNcqdt3HxOw"
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => setViewport(viewport)}
            // onDblClick={handleAddClick}
            ref={(ref) => (reactMap.current = ref && ref.getMap())}
          >
            <Editor
              ref={editorRef}
              style={{ width: "100%", height: "100%" }}
              clickRadius={12}
              mode={mode}
              onSelect={onSelect}
              onUpdate={onUpdate}
              editHandleShape={"circle"}
              featureStyle={getFeatureStyle}
              editHandleStyle={getEditHandleStyle}
            />
            <FullscreenControl
              style={{
                right: 10,
                top: 10,
              }}
            />
            {drawTools}
          </ReactMapGL>
        </Box>
        <Box maxW={"480px"}>
          <Text>Selected Area Result</Text>
          <Badge>{JSON.stringify(polygonData[0]?.geometry.type)}</Badge>
          <Box>
            {polygonData[0]?.geometry.coordinates[0].map((coor) => (
              <Badge>{coor}}</Badge>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectionMap;
