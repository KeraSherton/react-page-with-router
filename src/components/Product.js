import React from "react";

import "../styles/Product.css";

const Product = props => {
  return (
    <div>
      <article className="product">
        <h1>{props.id}</h1>
      </article>
    </div>
  );
};

export default Product;
