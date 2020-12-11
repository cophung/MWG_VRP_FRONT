import React, { useEffect, useState } from "react";
import { Drawer, Spin, Table } from "antd";

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
    title: "Thời gian khách nhận hàng (h)",
    dataIndex: "timeWindow",
  },
];

const convertDataToMatchFormTable = (orders) => {
  let resultData = orders.map((order, index) => {
    const { id, name, place } = order;
    const { weight, serviceTime, timeWindow, long, lat } = order.order;

    return {
      key: index + 1,
      id,
      name,
      place,
      weight,
      serviceTime,
      timeWindow: `${timeWindow[0]} - ${timeWindow[1]}`,
      long,
      lat,
    };
  });

  return resultData;
};

function DrawerOrders({ initialOrders, onClose, visible }) {
  const [orders, setOrders] = useState([]);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    const orders = convertDataToMatchFormTable(initialOrders);
    setOrders(orders);

    return () => {
      setSpinning(false);
    };
  }, [initialOrders]);

  return (
    <Drawer
      title={`Tổng số đơn hàng: ${orders.length - 1}`}
      placement="left"
      key="left"
      width="70%"
      onClose={onClose}
      visible={visible}
      closable={true}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin spinning={spinning} tip="Đang lấy dữ liệu, xin vui lòng chờ ...">
          <Table
            rowSelection={{
              type: "checkbox",
              getCheckboxProps: (record) => ({
                name: record.name,
              }),
            }}
            columns={columns}
            dataSource={orders}
            scroll={{ y: 450 }}
          />
        </Spin>
      </div>
    </Drawer>
  );
}

export default DrawerOrders;
