import React from "react";
import {useState} from "react";
import { Route, Redirect } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
const [logon, setLogon]=useState(false);

  return (
    <Route
      render={() =>
        logon ? <Redirect to="/admin" /> : <div>
        <label>
          Login:
          <input className="fancy_input" type="text" required />
        </label>
        <label>
          Password:
          <input className="fancy_input" type="password" required />
        </label>
        <button onClick={e=>setLogon(true)} className="login_button">Qapla'</button>
      </div>
      }
    />
  );
};

export default LoginPage;
//dodaj jakiś sposób logowania
