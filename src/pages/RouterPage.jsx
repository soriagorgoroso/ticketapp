import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IncertPage from "./Incert";
import TicketRow from "./TicketRow";
import CreateTicket from "./CreateTicket";
import Desktop from "./Desktop";

const { Header, Sider, Content } = Layout;

const RouterPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/ingresar">Ingresar</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/cola">Cola</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/crear">Crear</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/incert" element={<IncertPage />} />
              <Route path="/row" element={<TicketRow />} />
              <Route path="/create" element={<CreateTicket />} />
              <Route path="/desktop" element={<Desktop />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPage;
