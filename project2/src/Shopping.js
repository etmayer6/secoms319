import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import ReactDOM from "react-dom";

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

const Shop = () => {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [ProductsCategory, setProductsCategory] = useState(items);

  const returnToCatalog = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>
        <input
          type="search"
          value={query}
          placeholder="Search"
          onChange={handleChange}
        />
        <div>{listItems}</div>
        <Button onClick={CartView} label="View Cart" />
      </div>
    );
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(
      "Step 6 : in handleChange, Target Value :",
      e.target.value,
      " Query Value :",
      query
    );
    const results = items.filter((eachProduct) => {
      if (e.target.value === "") return ProductsCategory;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProductsCategory(results);
  };
  const CartView = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>
        <div>Items in Cart:</div>
        <div>{cartItems}</div>
        <div>Order total to pay: ${cartTotal}</div>
        <div>
          <TestButton />
        </div>

        <Button onClick={returnToCatalog} label="Return" />
      </div>
    );
  };

  const TestButton = () => {
    const handleClick = () => {
      console.log("Button clicked");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <div>
          <div>
            <Form />
          </div>
          <div>
            <button onClick={CartView}>Return to Cart</button>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Button onClick={handleClick} label="Checkout" />
      </div>
    );
  };

  function Form() {
    const refreshPage = () => {
      window.location.reload();
    };


    const runJS = () => {
      const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
      const form = document.getElementById("checkout-form");
      const inputCard = document.querySelector("#inputCard");
      const alertTrigger = document.getElementById("submit-btn");
      const summaryCard = document.querySelector(".card");
      const summaryList = document.querySelector(".card > ul");
      console.log(summaryList);

      var order = { name: "", email: "", card: "" };

      const alert = (message, type) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          ` <div>${message}</div>`,
          ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          "</div>",
        ].join("");
        alertPlaceholder.append(wrapper);
      };

      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      if (inputCard) {
        inputCard.addEventListener("input", (event) => {
          if (!inputCard.value) {
            return event.preventDefault(); // stops modal from being shown
          } else {
            inputCard.value = inputCard.value.replace(/-/g, "");
            let newVal = "";
            for (var i = 0, nums = 0; i < inputCard.value.length; i++) {
              if (nums != 0 && nums % 4 == 0) {
                newVal += "-";
              }
              newVal += inputCard.value[i];
              if (isNumeric(inputCard.value[i])) {
                nums++;
              }
            }
            inputCard.value = newVal;
          }
        });
      }
      let validate = function () {
        
        let val = true;
        let email = document.getElementById("inputEmail4");
        let name = document.getElementById("inputName");
        let card = document.getElementById("inputCard");
        let zip = document.getElementById("inputZip");

        if (
          !email.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          email.setAttribute("class", "form-control is-invalid");
          val = false;
        } else {
          email.setAttribute("class", "form-control is-valid");
          order.email = email.value;
        }

        if (name.value.length == 0) {
          name.setAttribute("class", "form-control is-invalid");
          val = false;
        } else {
          name.setAttribute("class", "form-control is-valid");
          order.name = name.value;
        }

        if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
          card.setAttribute("class", "form-control is-invalid");
          val = false;
        } else {
          card.setAttribute("class", "form-control is-valid");
          order.card = card.value;
        }
        if (zip.value.length == 5 && isNumeric(zip.value)) {
          zip.setAttribute("class", "form-control is-valid");
        } else {
          zip.setAttribute("class", "form-control is-invalid");
          val = false;
        }
        if (val) {
          summaryList.innerHTML='';
          form.classList.add("collapse");
          for (const [key, value] of Object.entries(order)) {
            console.log("hi");
            summaryList.innerHTML +=
              '<li class="list-group-item"> <b>' +
              `${key}` +
              ": </b>" +
              `${value}` +
              "</li>";
          }
          // }
          summaryCard.classList.remove("collapse");
          alertPlaceholder.innerHTML = "";
          alert(
            '<i class="bi-cart-check-fill"></i> You have made an order!',
            "success"
          );
        }
        return val;
      };

      if (form) {
        form.addEventListener(
          "submit",
          (event) => {
            //if (!form.checkValidity()) {
            //console.log("testing");
            if (!validate()) {
              alertPlaceholder.innerHTML = "";
              alert(
                '<i class="bi-exclamation-circle"></i> Something went wrong!',
                "danger"
              );
            }
            event.preventDefault();
            event.stopPropagation();
            //form.classList.add('was-validated')
          },
          false
        );
      }
    };

    return (
      <body>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h1>Checkout Form</h1>
              <div id="liveAlertPlaceholder"></div>
              <form className="row g-3" id="checkout-form">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="inputName" />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "John Doe"
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "abc@xyz.efg"
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputCard" className="form-label">
                    Card
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi-credit-card-fill"></i>
                    </span>
                    <input
                      type="text"
                      id="inputCard"
                      className="form-control"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Must be like, "7777-7777-7777-7777"
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  ></input>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  ></input>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                  ></input>
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Iowa</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">Must be like, "77777"</div>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    onClick={runJS}
                    className="btn btn-success"
                    >{" "}<i className="bi-bag-check"></i> Order</button>
                </div>
              </form>
              <div className="card collapse" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Order summary</h5>
                  <p className="card-text">Here is a summary of your order.</p>
                  <p className="card-text">Items: </p>
                  <div>{cartItems}</div>
                  <div>Order total to pay: ${cartTotal}</div>
                </div>
                <ul className="list-group list-group-flush"></ul>
                <a href="" onClick={refreshPage} className="btn btn-secondary">
                  <i className="bi-arrow-left-circle"></i> Return
                </a>
              </div>
              <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
                <div className="container py-4 py-md-5 px-4 px-md-3">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <b>SE/Com-S 319</b> Javascript form validation.
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        {/* runJS(); */}
      </body>
    );
  }

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
  const listItems = ProductsCategory.map((el) => (
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
      <input
        type="search"
        value={query}
        placeholder="Search for Items"
        onChange={handleChange}
      />
      <div>{listItems}</div>
      <Button onClick={CartView} label="View Cart" />
    </div>
  );
};
export default Shop;
