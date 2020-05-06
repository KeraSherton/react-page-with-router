import React from "react";
import { Route } from "react-router-dom";

const Footer = props => {
  return (
    <div>
      <Route
        path="/"
        exact
        render={props => {
          return <p>Info</p>;
        }}
      />
      <Route
        path="/:page"
        render={props => {
          return (
            <p>
              You are on <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        render={props => {
          return (
            <p>
              <span>{props.match.params.idProduct}</span> page
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
