import React, { useEffect, useState } from 'react';


function Form() {



        
return(
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1>Javascript Form Validation</h1>
          <div id="liveAlertPlaceholder"></div>
          <form className="row g-3" id="checkout-form">
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="inputName" />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Must be like, "John Doe"</div>
            </div>
            <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"></input>
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
          <input type="text" id="inputCard" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
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
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success"> <i className="bi-bag-check"></i> Order</button>
      </div>
          </form>
          <div className="card collapse" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Order summary</h5>
              <p className="card-text">Here is a summary of your order.</p>
            </div>
            <ul className="list-group list-group-flush"></ul>
            <a href="" onClick={() => console.log("test")} className="btn btn-secondary">
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