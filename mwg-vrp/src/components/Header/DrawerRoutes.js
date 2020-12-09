import React, { useEffect, useState } from "react";
import { Drawer, Spin } from "antd";
import _ from "lodash";

function DrawerRoutes({ onClose, visible, spinning }) {
  return (
    <Drawer
      title="Orders"
      placement="left"
      onClose={onClose}
      visible={visible}
      key="left"
      width="70%"
      closable={true}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spin
          spinning={spinning}
          tip="Đang lấy dữ liệu, xin vui lòng chờ ..."
        ></Spin>
      </div>
    </Drawer>
  );
}

export default DrawerRoutes;
