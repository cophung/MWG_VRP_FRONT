import React from "react";
import { Layout } from "antd";

import Header from "./Header";
import Sider from "./Sider";
import Content from "./Content";
import Footer from "../containers/Footer";

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
