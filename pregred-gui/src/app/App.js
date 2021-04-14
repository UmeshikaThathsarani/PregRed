import React from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from './pages/home/Home';
import Prediction from './pages/prediction/Prediction';

import AppHeader from './components/app-header/AppHeader';
import AppNavBar from './components/app-nav-bar/AppNavBar';

import 'antd/dist/antd.css';
import './App.css';
import AppFooter from './components/app-footer/AppFooter';

Amplify.configure(config);

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
              <Route component={Home} />
            </Switch>
          </Content>
          <AppFooter/>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
