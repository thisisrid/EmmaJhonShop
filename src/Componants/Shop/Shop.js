import React, { useState } from "react";
import fakeData from "../../../src/img/fakeData/index";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDatabaseCart } from "../../img/utilities/databaseManager";
import "./Shop.css";

const Shop = () => {
  const first15 = fakeData.slice(0, 15);
  const [cart, setCart] = useState([]);
  const clickHandle = (prod) => {
    const newCart = [...cart, prod];
    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === prod.key);
    console.log(sameProduct);
    const count = sameProduct.length;
    addToDatabaseCart(prod.key, count);
  };

  const [products] = useState(first15);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd, index) => (
          <Product
            showBtn={true}
            clickHandle={clickHandle}
            product={pd}
            key={index}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
