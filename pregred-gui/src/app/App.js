import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from './pages/home/Home';
import Prediction from './pages/prediction/Prediction';

import AppHeader from './components/app-header/AppHeader';
import AppNavBar from './components/app-nav-bar/AppNavBar';

import 'antd/dist/antd.css';
import './App.css';

const { Content, Footer, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <AppNavBar />
        </Sider>
        <Layout className="page-container">
          <AppHeader />
          <Content className="content-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/prediction" component={Prediction} />
              <Route component={Home} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
