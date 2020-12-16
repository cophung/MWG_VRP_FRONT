import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import "../../css/Header.css";
import MenuItems from "../../containers/Header/MenuItems";
import DrawerOrders from "../../containers/Header/DrawerOrders";
import DrawerRoutes from "../../containers/Header/DrawerRoutes";

const { Header } = Layout;

function HeaderComponent({
  statusRouting,
  fetchInitialDetailOrder,
  fetchRoutes,
}) {
  const [visibleOrders, setVisibleOrders] = useState(false);
  const [visibleRoutes, setVisibleRoutes] = useState(false);

  useEffect(() => {
    fetchInitialDetailOrder();
    fetchRoutes();
    return () => {};
  }, [fetchInitialDetailOrder, fetchRoutes]);

  useEffect(() => {
    setTimeout(() => {
      setVisibleRoutes(statusRouting);
    }, 1000);
    return () => {};
  }, [statusRouting]);

  return (
    <Header style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}>
      <MenuItems
        handleTabOrders={() => setVisibleOrders(true)}
        handleTabRoutes={() => setVisibleRoutes(true)}
      />
      <DrawerOrders
        onClose={() => setVisibleOrders(false)}
        visible={visibleOrders}
      />
      <DrawerRoutes
        onClose={() => setVisibleRoutes(false)}
        visible={visibleRoutes}
      />
    </Header>
  );
}

export default HeaderComponent;
