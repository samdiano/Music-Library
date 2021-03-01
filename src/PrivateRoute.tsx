import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./util/AuthUtil";

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export { PrivateRoute };
