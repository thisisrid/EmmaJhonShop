import React, { useEffect, useState } from "react";
import fakeData from "../../img/fakeData";
import { getDatabaseCart } from "../../img/utilities/databaseManager";

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
  return (
    <div>
      <h1>This is Order {cart.length}</h1>
    </div>
  );
}

export default Order;
