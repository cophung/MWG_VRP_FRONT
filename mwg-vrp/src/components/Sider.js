import React from "react";
import { Layout, Menu } from "antd";

import { CarOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent() {
  return (
    <Sider theme="light" width="60">
      <Menu mode="inline">
        <div className="logo">
          <CarOutlined style={{ fontSize: "30px", color: "#008000" }} />
        </div>
        <Menu.Item icon={<CarOutlined />}></Menu.Item>
        <Menu.Item icon={<CarOutlined />}></Menu.Item>
        <Menu.Item icon={<CarOutlined />}></Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderComponent;
