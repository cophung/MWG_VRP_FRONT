import React from "react";
import { Menu } from "antd";
import { DropboxOutlined, EnterOutlined } from "@ant-design/icons";

function MenuItems({ handleTabOrders, handleTabRoutes }) {
  return (
    <Menu theme="light" mode="horizontal">
      <Menu.Item
        key="orders"
        icon={<DropboxOutlined />}
        onClick={handleTabOrders}
        title="Chi tiet order"
      >
        Orders
      </Menu.Item>
      <Menu.Item
        key="routes"
        icon={<EnterOutlined />}
        onClick={handleTabRoutes}
      >
        Routes
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
