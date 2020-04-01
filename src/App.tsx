import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import SideNav from './Components/SideNav';
import Routes from './Components/Routing/Routes';

import './App.less';
import styles from './App.module.css';
import { Layout, Typography, Row } from 'antd';
import { loadUser } from './Redux/actions/auth';
import { setAuthToken } from './Utils/';
import { setBearerToken } from './Utils/index';
import ErrorBoundary from './Components/Error/ErrorBoundary';

const { Header, Footer } = Layout;
const { Title } = Typography;

if (localStorage.token) {
  setAuthToken(localStorage.token);
  setBearerToken(localStorage.token);
}

const App: React.FC = () => {
  useEffect(() => {
    (store.dispatch as ThunkDispatch<{}, {}, AnyAction>)(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <SideNav />

          <Layout>
            <Header style={{ display: 'flex' }}>
              <Row align="middle">
                <Title level={4} style={{ margin: 0, color: 'white' }}>
                  <img className={styles.logo} src="/static/images/logo.png" alt="logo" />
                </Title>
              </Row>
            </Header>

            <ErrorBoundary>
              <Route component={Routes} />
            </ErrorBoundary>
            <Footer style={{ textAlign: 'center' }}>Hivelocity 2020 Created by Hivelocity</Footer>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
