import React, { useEffect, useState } from "react";
import { Drawer, Spin, Table, Button } from "antd";
import _ from "lodash";

const createObjectMatchDataTable = (routes) => {
  let newRoutes = [];
  for (let i = 0; i < routes.length; i++) {
    const subRoutes = routes[i];
    let result = { key: i, no: i + 1 };
    const detailRoutes = [];

    for (let j = 1; j < subRoutes.length - 1; j++) {
      const order = subRoutes[j];
      detailRoutes.push({
        key: j,
        name: order.name,
        place: order.place,
        weight: order.order.weight,
        serviceTime: order.order.serviceTime,
        timeWindow: `${order.order.timeWindow[0]} - ${order.order.timeWindow[1]}`,
        long: order.order.long,
        lat: order.order.lat,
      });
    }
    result.routes = detailRoutes;
    newRoutes.push(result);
  }
  return newRoutes;
};

function DrawerRoutes({
  routes,
  fetchRoutes,
  handleSubRoute,
  onClose,
  visible,
}) {
  const [stateRoutes, setStateRoutes] = useState([]);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);

  useEffect(() => {
    const temponaryRoutes = createObjectMatchDataTable(routes);
    setStateRoutes(temponaryRoutes);
    return () => {
      setSpinning(false);
    };
  }, [routes]);

  const columns = [
    { title: "Tuyến đường", dataIndex: "no", key: "no" },
    {
      title: "Routing",
      key: "routing",
      fixed: "right",
      width: 100,
      render: (record, index) => (
        <Button
          type="primary"
          loading={false}
          onClick={() => {
            const depot = routes[0][0]; // lay thong tin order kho
            const temponaryDepot = {
              long: depot.order.long,
              lat: depot.order.lat,
              name: "Kho",
              place: depot.place,
              serviceTime: depot.order.serviceTime,
              timeWindow: depot.order.timeWindow,
              weight: depot.order.weight,
            };

            let temponaryRoutes = record.routes.map((item) => {
              return _.omit(item, ["key"]);
            });
            // console.log(temponaryRoutes, depot);
            temponaryRoutes = [
              temponaryDepot,
              ...temponaryRoutes,
              temponaryDepot,
            ];

            handleSubRoute(temponaryRoutes);
          }}
        >
          Routing
        </Button>
      ),
    },
  ];

  const subColumns = [
    { title: "Tên khách hàng", dataIndex: "name", key: "name" },
    { title: "Địa chỉ", dataIndex: "place", key: "place" },
    { title: "Cân nặng (kg)", dataIndex: "weight", key: "weight" },
    {
      title: "Thời gian phục vụ (h)",
      dataIndex: "serviceTime",
      key: "serviceTime",
    },
    {
      title: "Thời gian nhận hàng (h)",
      dataIndex: "timeWindow",
      key: "timeWindow",
    },
  ];

  return (
    <Drawer
      title={`Tổng số tuyến: ${stateRoutes.length}`}
      placement="left"
      onClose={onClose}
      visible={visible}
      key="left"
      width="70%"
      closable={true}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flexGrow: 1 }}>
          <Spin
            spinning={spinning}
            tip="Đang lấy dữ liệu, xin vui lòng chờ ..."
          >
            <Table
              columns={columns}
              dataSource={stateRoutes}
              expandable={{
                expandedRowRender: (record) => (
                  <Table
                    columns={subColumns}
                    dataSource={record.routes}
                    pagination={false}
                  />
                ),
              }}
            />
          </Spin>
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerRoutes;
