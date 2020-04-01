import React, { ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';

interface PrivateRouteProps extends RouteProps {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const auth = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <Route
      {...rest}
      render={(props): ReactElement =>
        !auth.token && !auth.isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
