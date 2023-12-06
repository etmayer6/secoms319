import React, { useState } from "react";
import './App.css';
import ReactDOM from "react-dom";

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

var products;






function getAllProducts(){


  fetch("http://localhost:8081/catalog")
      .then((response) => response.json())
      .then((data) => {
        products = data;

            const renderCatalog = () => {
              const root = ReactDOM.createRoot(document.getElementById("root"));
              root.render(
                <div>
                  <div>
                    <allProducts/>
                  </div>
                </div>
              );
            };
      
            renderCatalog();

      });






      function allProducts(){

        return (
          <body
            className="Weather"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://etmayer6.github.io/secoms319/page1/sun-images.jpg")`,
            }}
          >
            <div>
              <div>
                <section>
                  <div>
                    <h1
                      style={{ textAlign: "center" }}
                    >
                      Product Catalog!
                    </h1>
                  </div>
                </section>
              </div>
            </div>
          </body>
        );
      }
      
}

function postProduct(){


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div>
        <POST/>
      </div>
    </div>
  );
    function POST(){

      const submitPost = () => {

      }

      return(
        <div style={{ textAlign: "center" }}>
          <Button onClick={submitPost} label="Submit"></Button>
        </div>
      );
    }
}

function deleteProduct(){


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div >
        <DELETE/>
      </div>
    </div>
  );

      function DELETE(){


        const submitDelete = () => {

        }
      return(
        <div style={{ textAlign: "center" }}>
          <Button onClick={submitDelete} label="Submit"></Button>
        </div>
      );
    }
}

function updateProduct(){


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div>
        <UPDATE/>
      </div>
    </div>
  );


  function UPDATE(){


    const submitUpdate = () => {

    }
    return(
      <div style={{ textAlign: "center" }}>
          <Button onClick={submitUpdate} label="Submit"></Button>        
      </div>
    );
  }

}


const App = () => {




  return (
    <body>
      <div>
        <div>
          <section>
            <div>
              <h1
                style={{ textAlign: "center" }}
              >
                Product Catalog!
              </h1>
            </div>
          </section>
          <section style={{ textAlign: "center" }}>
            <Button onClick={getAllProducts} label="Get All Products"></Button>
            <Button onClick={postProduct} label="Add Product"></Button>
            <Button onClick={deleteProduct} label="Delete Product"></Button>
            <Button onClick={updateProduct} label="Update Product"></Button>
          </section>
        </div>
      </div>
    </body>
  );
}

export default App;
