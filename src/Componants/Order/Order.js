import React, { useEffect, useState } from "react";
import fakeData from "../../img/fakeData";
import { getDatabaseCart } from "../../img/utilities/databaseManager";
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
  return (
    <div className="review-items">
      <h1>You Ordered {cart.length} product[s]</h1>
      { cart.map(pd => <Oredereditems product={pd} />)}
    </div>
  );
}

export default Order;
