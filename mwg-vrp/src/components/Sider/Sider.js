import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { CarOutlined } from "@ant-design/icons";

const { Sider } = Layout;

function SiderComponent() {
  return (
    <Sider theme="light" width="60">
      <Link to="/">
        <div className="logo">
          <CarOutlined style={{ fontSize: "30px", color: "#008000" }} />
        </div>
      </Link>
    </Sider>
  );
}

export default SiderComponent;
