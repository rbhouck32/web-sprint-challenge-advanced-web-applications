import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("authToken")) {
          return <Component />;
        }
        console.log("redirecting you to the login");
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
