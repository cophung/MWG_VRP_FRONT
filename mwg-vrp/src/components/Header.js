import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Layout, Menu, Drawer, Spin } from "antd";
import { DropboxOutlined } from "@ant-design/icons";

import "../css/Header.css";
import ComponentTable from "./common/ComponentTable";

const { Header } = Layout;

const columns = [
  {
    title: "Số thứ tự",
    dataIndex: "key",
  },
  {
    title: "Tên khách hàng",
    dataIndex: "name",
  },
  {
    title: "Địa chỉ",
    dataIndex: "place",
  },
  {
    title: "Cân nặng (kg)",
    dataIndex: "weight",
  },
  {
    title: "Thời gian phục vụ (h)",
    dataIndex: "serviceTime",
  },
  {
    title: "Thời gian khách nhận hàng",
    dataIndex: "timeWindow",
  },
];

function HeaderComponent({ initialOrders, fetchInitialDetailOrder }) {
  const [orders, setOrders] = useState(initialOrders);
  const [visible, setVisible] = useState(false);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    let temporaryOrders = initialOrders.map((order, index) => {
      let temporaryOrder = _.cloneDeep(_.omit(order, ["order"]));
      temporaryOrder = {
        key: index + 1,
        ...temporaryOrder,
        weight: order.order.weight,
        serviceTime: order.order.serviceTime,
        timeWindow: `${order.order.timeWindow[0]}h - ${order.order.timeWindow[1]}h`,
      };
      return temporaryOrder;
    });

    setOrders(temporaryOrders);
    return () => {
      setSpinning(false);
    };
  }, [initialOrders]);

  const handleDrawer = () => {
    setVisible(true);
    fetchInitialDetailOrder();
  };

  return (
    <Header style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}>
      <Menu theme="light" mode="horizontal">
        <Menu.Item
          key="orders"
          icon={<DropboxOutlined />}
          onClick={() => handleDrawer()}
        >
          Orders
        </Menu.Item>
      </Menu>
      <Drawer
        title="Orders"
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key="left"
        width="70%"
        closable={true}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spin
            spinning={spinning}
            tip="Đang lấy dữ liệu, xin vui lòng chờ ..."
          >
            <ComponentTable
              selectionType="checkbox"
              columns={columns}
              data={orders}
            />
          </Spin>
        </div>
      </Drawer>
    </Header>
  );
}

export default HeaderComponent;
