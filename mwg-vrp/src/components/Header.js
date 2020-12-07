import React from "react";
import { Layout, Menu } from "antd";

import "../static/css/Header.css";
import { CarOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Header } = Layout;

function HeaderComponent() {
  return (
    <Header style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}>
      {/* <Menu theme="light" mode="horizontal">
        <Menu.Item key="Drivers">Drivers</Menu.Item>
        <Menu.Item key="Stops">Stops</Menu.Item>
      </Menu> */}
    </Header>
  );
}

export default HeaderComponent;
