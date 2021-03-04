import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../img/fakeData";
import Product from "../Product/Product";

function ProductDetails() {
  const {productKey} = useParams();
  const product =  fakeData.find(pd => pd.key === productKey)
console.log(product)
  return (
    <div>
      <h1>This is details..............</h1>
      <Product showBtn={false} product={product} />
    </div>
  );
}

export default ProductDetails;
