import { useState, useRef, useEffect } from "react";
import "./App.css";
import "ol/ol.css";
import Map from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Button, Paper } from "@mui/material/";

function App() {
  const mapRef = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    const initialMap = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapRef.current,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    setMap(initialMap);
  }, []);
  return (
    <div className="App">
      <div ref={mapRef} className="map"></div>
    </div>
  );
}

export default App;
