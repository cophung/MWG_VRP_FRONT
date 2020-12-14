import React, { useEffect, useRef, useState } from "react";

import "../../css/WebMapView.css";
import { handleSubRoutes, handleAllRoutes } from "../../library/mapView";

const WebMapView = ({ subRoutes, allRoutes, completeProcessingRouting }) => {
  const mapRef = useRef();

  useEffect(() => {
    handleSubRoutes(mapRef, subRoutes);
    return () => {
      completeProcessingRouting();
    };
  }, [subRoutes, completeProcessingRouting]);

  useEffect(() => {
    handleAllRoutes(mapRef, allRoutes);
    return () => {
      completeProcessingRouting();
    };
  }, [allRoutes, completeProcessingRouting]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
