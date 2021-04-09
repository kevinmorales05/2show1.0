import "./App.css";
import { Layout, Menu } from "antd";
import {
  PlayCircleOutlined,
  UserOutlined,
  InfoCircleOutlined,
  HomeOutlined, ProfileOutlined
} from "@ant-design/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SingIn from "./pages/SingIn";
import Home from "./pages/Home";
import About from "./pages/About";
import Shows from "./pages/Shows";
import Profile from "./pages/Profile"

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<PlayCircleOutlined />}>
                <Link to="/shows">Shows</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/singin"> Sing in </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ProfileOutlined />}>
                <Link to="/profile">Mi Perfil</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/shows">
                    <Shows />
                  </Route>
                  <Route path="/singin">
                    <SingIn />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              2Show ©2021 Created by <a href="https://i-code.tech/" target="blank">iCode-Tech</a>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
