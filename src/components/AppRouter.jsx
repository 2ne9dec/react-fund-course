import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ? <Switch>
          {privateRoutes.map((route) => {
            const { path, component, exact } = route;
            return <Route key={path} exact={exact} path={path} component={component} />;
          })}
        <Redirect to='/posts' />
        </Switch>
      : <Switch>
          {publicRoutes.map((route) => {
            const { path, component, exact } = route;
            return <Route key={path} exact={exact} path={path} component={component} />;
          })}
        <Redirect to='/login' />
        </Switch>
  );
}

export default AppRouter;
