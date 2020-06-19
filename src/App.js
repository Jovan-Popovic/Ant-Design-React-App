import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
import RickMorty from "./components/RickMorty";
import "./App.less";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
                <Menu.Item key="2" icon={<ContactsOutlined />}>
                  <Link to="/contact-us">Contact Us</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                  <Link to="/rick-morty">Rick & Morty</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/contact-us" component={ContactUs} />
                  <Route path="/rick-morty" component={RickMorty} />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
