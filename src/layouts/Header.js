import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/bridge.jpg";
import img2 from "../images/bird.jpg";
import img3 from "../images/night.jpg";
import img4 from "../images/stairs.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="bridge" />} />
        <Route path="/product" render={() => <img src={img2} alt="bird" />} />
        <Route path="/contact" render={() => <img src={img3} alt="night" />} />
        <Route path="/login" render={() => <img src={img4} alt="stairs" />} />
        <Route path="/admin" render={() => <img src={img4} alt="stairs" />} />
        <Route render={() => <img src={img1} alt="bridge" />} />
      </Switch>
    </>
  );
};

export default Header;
