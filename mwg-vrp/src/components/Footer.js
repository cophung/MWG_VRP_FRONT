import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterComponent() {
  return (
    <Footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      Footer
    </Footer>
  );
}

export default FooterComponent;
