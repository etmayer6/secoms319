import React, { useEffect, useState } from 'react';

function Form() {

  const refreshPage = () => {

    window.location.reload();
  }

  //<div className="col-12">
  //<button type="submit" onClick={runJS} className="btn btn-success"> <i className="bi-bag-check"></i> runJS</button>
  //</div>

  var success = 0;

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

      if (success != 123) {
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

      }
      if (val) {
        form.classList.add("collapse");
        if (success != 123) {
          for (const [key, value] of Object.entries(order)) {
            summaryList.innerHTML +=
              '<li class="list-group-item"> <b>' +
              `${key}` +
              ": </b>" +
              `${value}` +
              "</li>";
          }
        }
        summaryCard.classList.remove("collapse");
        alertPlaceholder.innerHTML = "";
        alert(
          '<i class="bi-cart-check-fill"></i> You have made an order!',
          "success"
        );
      }
      success = 123;
      return val;
    };

    if (form) {
      form.addEventListener('submit', event => {
        //if (!form.checkValidity()) {
        if (!validate()) {
          alertPlaceholder.innerHTML = ''
          alert('<i class="bi-exclamation-circle"></i> Something went wrong!', 'danger')
        }
        event.preventDefault()
        event.stopPropagation()
        //form.classList.add('was-validated')
      }, false)
    }
  }


  return (
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
              <input type="text" onChange={runJS} className="form-control" id="inputName" />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Must be like, "John Doe"</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" onChange={runJS} className="form-control" id="inputEmail4"></input>
              <div className="valid-feedback">
                Looks good!
              </div>
              <div className="invalid-feedback">
                Must be like, "abc@xyz.efg"
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inputCard" className="form-label">Card</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="bi-credit-card-fill"></i></span>
                <input type="text" onChange={runJS} id="inputCard" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                  aria-label="Username" aria-describedby="basic-addon1"></input>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Must be like, "7777-7777-7777-7777"
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Iowa</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip"></input>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" onClick={runJS} className="btn btn-success"> <i className="bi-bag-check"></i> Order</button>
            </div>
          </form>
          <div className="card collapse" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Order summary</h5>
              <p className="card-text">Here is a summary of your order.</p>
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
  );
}



export default Form;