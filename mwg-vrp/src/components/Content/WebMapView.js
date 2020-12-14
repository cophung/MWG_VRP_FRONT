import React, { useEffect, useRef, useState } from "react";

import "../../css/WebMapView.css";
import { handleSubRoutes } from "../../library/map";

const WebMapView = ({ subRoutes, completeProcessingRouting }) => {
  const mapRef = useRef();

  useEffect(() => {
    handleSubRoutes(mapRef, subRoutes);
    return () => {
      completeProcessingRouting();
    };
  }, [subRoutes, completeProcessingRouting]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
