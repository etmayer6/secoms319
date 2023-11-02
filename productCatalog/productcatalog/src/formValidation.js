


function Form() {




    return(
<div>
<head>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
    crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>

</head>

<body>
       <div>
        <div class="container">

        <div class="row">
          <div class="col-2"></div>
    
    
          <div class="col-8">
    
            <h1>Javascript Form Validation</h1>
    
            <div id="liveAlertPlaceholder"></div>
    
            <form class="row g-3" id="checkout-form">
    
              <div class="col-md-6">
                <label for="inputName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="inputName"></input>
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Must be like, "John Doe"
                </div>
              </div>
    
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"></input>
                <div class="valid-feedback">
                  Looks good!
                </div>
                <div class="invalid-feedback">
                  Must be like, "abc@xyz.efg"
                </div>
              </div>
    
              <div class="col-12">
                <label for="inputCard" class="form-label">Card</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
                  <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username" aria-describedby="basic-addon1"></input>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>
    
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"></input>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-success"> <i class="bi-bag-check"></i> Order</button>
              </div>
            </form>
    
    
            <div class="card collapse" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Order summary</h5>
                <p class="card-text">Here is a summary of your order.</p>
              </div>
              <ul class="list-group list-group-flush">
    
              </ul>
              <a href="" onclick="location.reload()" class="btn btn-secondary"> <i class="bi-arrow-left-circle"></i>
                Return</a>
            </div>
    
    
            <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
              <div class="container py-4 py-md-5 px-4 px-md-3">
                <div class="row">
                  <div class="col-lg-12 mb-3">
                    <b>SE/Com-S 319</b> Javascript form validation.
                  </div>
    
                </div>
              </div>
            </footer>
    
          </div>
    
          <div class="col-2"></div>
    
    
        </div>
    
      </div>
    
      <script type="text/javascript" src="./script.js"></script>

    </div>
    </body>
    </div>
    );


}

export default Form;