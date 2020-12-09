import React from "react";
import { Layout } from "antd";

import Header from "../containers/Header/Header";
import Sider from "./Sider/Sider";
import Content from "./Content/Content";
import Footer from "../containers/Footer/Footer";

function ComponentLayout() {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
}

export default ComponentLayout;
