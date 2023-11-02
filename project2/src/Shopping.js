import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };
  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
    }
  const listItems = items.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          <button
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img className="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));
  return (
    <div>
      <div>{listItems}</div>
      <div>Items in Cart:</div>
      <div>{cartItems}</div>
      <div>Order total to pay: ${cartTotal}</div>
    </div>
  );
};
export default Shop;
