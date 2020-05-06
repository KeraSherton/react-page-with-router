import React from "react";
import Product from "../components/Product.js";
import { Link } from "react-router-dom";


const ProductPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Page of product:</h2>
      <Product id={match.params.id} />
      <Link to="/product">Go back</Link>
    </div>
  );
};

export default ProductPage;
