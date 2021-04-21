import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from './pages/home/Home';
import Prediction from './pages/prediction/Prediction';
import BMI from './pages/BMI/BMI';
import Healthcare from './pages/Healthcare/Healthcare';

import AppHeader from './components/app-header/AppHeader';
import AppNavBar from './components/app-nav-bar/AppNavBar';

import 'antd/dist/antd.css';
import './App.css';
import AppFooter from './components/app-footer/AppFooter';

const { Content,Sider } = Layout;

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
              <Route path="/calculator" component={BMI} />
              <Route path="/healthcare" component={Healthcare} />
            </Switch>
          </Content>
          <AppFooter/>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
