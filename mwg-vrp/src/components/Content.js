import React from "react";
import { Layout } from "antd";
import { Map } from "@esri/react-arcgis";

const { Content } = Layout;

function ContentComponent() {
  return (
    <Content style={{ marginTop: 64, padding: 5, height: "82vh" }}>
      <Map />
    </Content>
  );
}

export default ContentComponent;
