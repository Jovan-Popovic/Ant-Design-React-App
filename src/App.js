import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { auth } from "./auth/AuthService";
import { PrivateRoute } from "./auth/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
import RickMorty from "./components/RickMorty";
import "./App.less";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: auth.getAuthStatus(),
      collapsed: false,
    };
  }

  toggleAuthStatus = (status) => {
    if (!status) auth.logout();
    this.setState({ isAuth: status });
  };

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
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<PieChartOutlined />}>
                  <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ContactsOutlined />}>
                  <Link to="/dashboard/contact-us">Contact Us</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<DesktopOutlined />}>
                  <Link to="/dashboard/rick-morty">Rick & Morty</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              />
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "30px 0" }} />
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                      path="/login"
                      render={() =>
                        this.state.isAuth ? (
                          <Button
                            type="secondary"
                            onClick={() => this.toggleAuthStatus(false)}
                          >
                            Logout
                          </Button>
                        ) : (
                          <Login
                            toggleAuthStatus={this.toggleAuthStatus}
                            isAuth={this.state.isAuth}
                          />
                        )
                      }
                    />
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                    <PrivateRoute
                      path="/dashboard/contact-us"
                      component={ContactUs}
                    />
                    <PrivateRoute
                      path="/dashboard/rick-morty"
                      component={RickMorty}
                    />
                  </Switch>
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
