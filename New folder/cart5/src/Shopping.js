import React, { useState, useEffect } from "react";
import items from "./selected_products.json";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (el) => {
    //...cart is whatever is inside the cart + el
    setCart([...cart, el]);
  };
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={150} /> <br />
      {el.title} <br />
      {el.category} <br />
      {el.price} <br />
      <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
      <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
    </div>
  ));
  return <div>{listItems}</div>;
};
export default Shop;
