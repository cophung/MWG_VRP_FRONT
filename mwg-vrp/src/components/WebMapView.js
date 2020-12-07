import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import "../static/css/WebMapView.css";

const WebMapView = ({ routes, getAllRoutes }) => {
  const mapRef = useRef();

  useEffect(() => {
    console.log(routes);
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "streets-navigation-vector",
        });

        // load the map view at the ref's DOM node
        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [106.775174, 10.847981],
          zoom: 8,
        });

        return () => {
          if (view) {
            // destroy the map view
            view.destroy();
          }
        };
      }
    );
  });

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
