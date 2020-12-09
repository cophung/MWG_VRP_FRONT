import React, { useEffect, useRef, useState } from "react";
import { loadModules } from "esri-loader";

import "../css/WebMapView.css";

const getRandomRGB = () => (Math.random() * 256) >> 0;

const WebMapView = ({ routes }) => {
  const mapRef = useRef();
  const [routesState, setRoutesState] = useState(routes);

  useEffect(() => {
    loadModules(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/layers/GraphicsLayer",
        "esri/tasks/RouteTask",
        "esri/tasks/support/RouteParameters",
        "esri/tasks/support/FeatureSet",
      ],
      { css: true }
    ).then(
      ([
        ArcGISMap,
        MapView,
        Graphic,
        GraphicsLayer,
        RouteTask,
        RouteParameters,
        FeatureSet,
      ]) => {
        let routeTask = new RouteTask({
          url:
            "https://utility.arcgis.com/usrsvcs/appservices/IM9l55uugiQEaBPv/rest/services/World/Route/NAServer/Route_World",
        });

        // The stops and route result will be stored in this layer
        let routeLayer = new GraphicsLayer();

        const map = new ArcGISMap({
          basemap: "streets-navigation-vector",
          layers: [routeLayer], // Add the route layer to the map
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
  }, [routesState]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
