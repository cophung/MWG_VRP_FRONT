import React from "react";
import { Menu } from "antd";
import { DropboxOutlined, EnterOutlined } from "@ant-design/icons";

function MenuItems({ handleTabOrders, handleTabRoutes }) {
  return (
    <Menu theme="light" mode="horizontal">
      <Menu.Item
        key="orders"
        title="Danh sách Order"
        icon={<DropboxOutlined />}
        onClick={handleTabOrders}
      >
        Orders
      </Menu.Item>
      <Menu.Item
        key="routes"
        title="Danh sách tuyến đường"
        icon={<EnterOutlined />}
        onClick={handleTabRoutes}
      >
        Routes
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
