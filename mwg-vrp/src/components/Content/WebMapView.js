import React, { useEffect, useRef, useState } from "react";

import "../../css/WebMapView.css";
import { handleSubRoutes, handleAllRoutes } from "../../library/map";

const WebMapView = ({ subRoutes, allRoutes, completeProcessingRouting }) => {
  const mapRef = useRef();
  console.log("All routes: ", allRoutes);
  useEffect(() => {
    handleSubRoutes(mapRef, subRoutes);
    return () => {
      completeProcessingRouting();
    };
  }, [subRoutes, completeProcessingRouting]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
