import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

import "../static/css/WebMapView.css";

const WebMapView = ({ routes }) => {
  const mapRef = useRef();

  useEffect(() => {
    loadModules(["esri/Map", "esri/views/MapView"], { css: true }).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap: "streets-navigation-vector",
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [106.775174, 10.847981],
          zoom: 8,
        });

        return () => {
          if (view) {
            view.destroy();
          }
        };
      }
    );
  }, [routes]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
