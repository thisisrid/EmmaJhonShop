import React, { useEffect, useState } from "react";
import fakeData from "../../../src/img/fakeData/index";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDatabaseCart, getDatabaseCart } from "../../img/utilities/databaseManager";
import "./Shop.css";

const Shop = () => {
  const first15 = fakeData.slice(0, 15);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
const savedCart = getDatabaseCart();
const pKeys = Object.keys(savedCart);
const prevCart = pKeys.map(existingKey => {
const product = fakeData.find(pd => pd.key === existingKey)
product.quantity = savedCart[existingKey];
return product;
})

setCart(prevCart);
  }, [])


  const clickHandle = (prod) => {
   const  sameProduct = cart.find((pd) => pd.key === prod.key);
   let newCart;
   let count =1;
if(sameProduct){
count = sameProduct.quantity + 1;
sameProduct.quantity = count;
const others = cart.filter(pd => pd.key !== prod.key)
newCart = [...others, sameProduct];
setCart(newCart);
}

else {
  prod.quantity = 1;
  newCart=[...cart, prod]
  setCart(newCart);
}
    
    

    // const sameProduct = newCart.filter((pd) => pd.key === prod.key);
    // console.log(cart);
    // const count = sameProduct.length;
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
