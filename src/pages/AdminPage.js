import React from "react";
import { Route, Redirect } from "react-router-dom";
import cm from "../images/cm.jpg";

const permission = true;
//set false to wiew login page

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? <div><h3>Admin panel</h3><img src={cm} alt="cm" /></div> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminPage;
