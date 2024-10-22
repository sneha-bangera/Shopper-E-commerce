import React from "react";
import './Breadcrums.css';

function Breadcrums(props) {

    const {product} = props;

    return (
      <div className="breadcrum">
        HOME ▶ SHOP ▶ {product.category} ▶ {product.name}
      </div>
    )
  }
  export default Breadcrums;