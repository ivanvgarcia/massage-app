import React from 'react';
import { Layout } from 'antd';

// import PrivateRoute from './PrivateRoute';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../../Views/Home';
import Login from '../../Views/Login';
import Resource from '../../Views/Resource';

const { Content } = Layout;

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <Content>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path={location.pathname} exact component={Resource} />
      </Switch>
    </Content>
  );
};

export default Routes;
