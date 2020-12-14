import React, { useEffect, useRef, useState } from "react";

import "../../css/WebMapView.css";
import { handleSubRoutes, handleAllRoutes } from "../../library/mapView";

const WebMapView = ({
  subRoutes,
  allRoutes,
  statusRouting,
  completeProcessingRouting,
}) => {
  const mapRef = useRef();

  useEffect(() => {
    handleSubRoutes(mapRef, subRoutes);
    return () => {};
  }, [subRoutes]);

  useEffect(() => {
    if (allRoutes.length !== 0) {
      handleAllRoutes(mapRef, allRoutes);
    }
    return () => {};
  }, [allRoutes]);

  useEffect(() => {
    return () => {
      completeProcessingRouting();
    };
  }, [statusRouting, completeProcessingRouting]);

  return <div className="webmap" ref={mapRef} />;
};

export default WebMapView;
