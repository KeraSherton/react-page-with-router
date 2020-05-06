import React from "react";
import obi from "../images/obi-wan.jpg";

const ErrorPage = () => {
  return (
    <div>
      <p>These aren't the pages you're looking for...</p>
      <img src={obi} alt="Jedi says no" />
    </div>
  );
};

export default ErrorPage;
