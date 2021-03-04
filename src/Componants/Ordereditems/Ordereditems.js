import React from "react";
import "./Ordereditems.css";

const Oredereditems = (props) => {
  console.log(props.product);
  const { name, seller, quantity } = props.product;
  return (
    <div className="oredered-item">
      <h3>{name}</h3>
      <h4>by {seller} </h4>
      <h4>Quantity: {quantity}</h4>
      <button className="btn-custom"> Remove Item</button>
    </div>
  );
};

export default Oredereditems;
