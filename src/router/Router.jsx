import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ClientWrapper from './ClientWrapper';
import { privateRoutes, publicRoutes } from './routes';
import AdminWrapper from './AdminWrapper';

const Router = () => (
  <Switch>
    {[...privateRoutes, ...publicRoutes].map((route) => {
      if (route.admin) {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            key={route.path}
          >
            <AdminWrapper>{route.component}</AdminWrapper>
          </Route>
        );
      }

      return (
        <Route
          path={route.path}
          exact={route.exact}
          key={route.path}
        >
          <ClientWrapper>{route.component}</ClientWrapper>
        </Route>
      );
    })}
    <Redirect to='/' />
  </Switch>
);

export default Router;
