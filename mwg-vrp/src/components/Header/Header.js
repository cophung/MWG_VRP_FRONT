import React, { useState } from "react";
import { Layout } from "antd";

import "../../css/Header.css";
import MenuItems from "./MenuItems";
import DrawerOrders from "../../containers/Header/DrawerOrders";
import DrawerRoutes from "../../containers/Header/DrawerRoutes";

const { Header } = Layout;

function HeaderComponent() {
  const [visibleOrders, setVisibleOrders] = useState(false);
  const [visibleRoutes, setVisibleRoutes] = useState(false);

  return (
    <Header style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}>
      <MenuItems
        handleTabOrders={() => setVisibleOrders(true)}
        handleTabRoutes={() => setVisibleRoutes(true)}
      />
      {visibleOrders && (
        <DrawerOrders
          onClose={() => setVisibleOrders(false)}
          visible={visibleOrders}
        />
      )}
      {visibleRoutes && (
        <DrawerRoutes
          onClose={() => setVisibleRoutes(false)}
          visible={visibleRoutes}
          spinning={false}
        />
      )}
    </Header>
  );
}

export default HeaderComponent;
