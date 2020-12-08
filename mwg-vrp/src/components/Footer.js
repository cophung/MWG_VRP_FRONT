import React from "react";
import { Layout, Button } from "antd";

const { Footer } = Layout;

function FooterComponent({ routes, fetch }) {
  return (
    <Footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Button onClick={() => fetch()}>Routing</Button>
    </Footer>
  );
}

export default FooterComponent;
