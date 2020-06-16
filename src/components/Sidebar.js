import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/contact-us">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/rick-morty">Rick & Morty</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
