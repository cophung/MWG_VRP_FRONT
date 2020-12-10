import React, { useEffect, useState } from "react";
import { Drawer, Spin } from "antd";
import _ from "lodash";

import ComponentTable from "../common/ComponentTable";

const columns = [
  {
    title: "Số thứ tự",
    dataIndex: "no",
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

function DrawerOrders({
  initialOrders,
  fetchInitialDetailOrder,
  onClose,
  visible,
}) {
  const [orders, setOrders] = useState([]);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    fetchInitialDetailOrder();
  }, [fetchInitialDetailOrder]);

  useEffect(() => {
    let temporaryOrders = initialOrders.map((order, index) => {
      let temporaryOrder = _.cloneDeep(_.omit(order, ["order"]));
      temporaryOrder = {
        key: index,
        no: index + 1,
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

  return (
    <Drawer
      title={`Tổng số đơn hàng: ${orders.length - 1}`}
      placement="left"
      onClose={onClose}
      visible={visible}
      key="left"
      width="70%"
      closable={true}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin spinning={spinning} tip="Đang lấy dữ liệu, xin vui lòng chờ ...">
          <ComponentTable
            selectionType="checkbox"
            columns={columns}
            data={orders}
          />
        </Spin>
      </div>
    </Drawer>
  );
}

export default DrawerOrders;
