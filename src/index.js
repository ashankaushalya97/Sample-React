
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from "./App"
import Home from "./Home"
import About from "./About"
import { Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Nav from "./Nav"

const { Header, Content, Footer } = Layout;


ReactDOM.render(
  <Layout>
      {/* <Router> */}
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
    {/* <Router>
        <NavLink to="/home">
            <Menu.Item key="1">Home</Menu.Item>
        </NavLink>
        <NavLink to="/todo">
            <Menu.Item key="2">To Do</Menu.Item>
        </NavLink>
        <NavLink to="/about">
            <Menu.Item key="3">About</Menu.Item>
        </NavLink>
    </Router> */}
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">To Do</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
        
        

      </Menu>
        

    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 650 }}>
          <Router>
          <Nav/>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/todo" component={App} />
                <Route path="/about" component={About} />
            </Switch>
          
          </Router>    









      </div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    {/* </Router> */}
  </Layout>,
  document.getElementById('container'),
);
          