import React, { useEffect, useState } from "react";
import fakeData from "../../img/fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../img/utilities/databaseManager";
import Cart from "../Cart/Cart";
import Oredereditems from "../Ordereditems/Ordereditems";
import "./Order.css";

function Order() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  const removeProduct = (ky) => {
    const updatedCart = cart.filter((pd) => pd.key !== ky);
    setCart(updatedCart);
    removeFromDatabaseCart(ky);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>You Ordered {cart.length} product[s]</h1>
        {cart.map((pd) => (
          <Oredereditems
            removeProduct={removeProduct}
            product={pd}
            key={pd.key}
          />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default Order;
