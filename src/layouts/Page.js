import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ProductListPage from "../pages/ProductListPage.js";
import ContactPage from "../pages/ContactPage.js";
import AdminPage from "../pages/AdminPage.js";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductListPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/product/:id" exact component={ProductPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
