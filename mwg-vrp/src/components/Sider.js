import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

function SiderComponent() {
  return (
    <Sider theme="light" width="60">
      {/* <Menu mode="inline">
        <Link to="/">
          <div className="logo">
            <CarOutlined style={{ fontSize: "30px", color: "#008000" }} />
          </div>
        </Link>
      </Menu> */}
    </Sider>
  );
}

export default SiderComponent;
