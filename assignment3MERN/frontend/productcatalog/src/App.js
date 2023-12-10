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


const loadFirstPage = () => {
  window.location.reload();
};

var products;

function ShowStudentInfo(){
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <StudentInfo />
    </div>
  );
  
}

function StudentInfo(){
  
  const backFromStudentInfo =() =>{
    loadFirstPage();
  }

  return (
    <>
    <section>
        <h1 style={{textAlign: "center"}}>
            SE COMS 319: Construction of User Interfaces
        </h1>
    </section>
    <section>
        <h1 style={{textAlign: "center"}}>
            Developer Credits
        </h1>
    </section>
    <section>
        <h1 style={{textAlign: "center"}}>
            December 2023
        </h1>
    </section>
    <section>
      <p style={{textAlign: "center"}}>
      Assignment 03: MERN Application Development: This project has the required CRUD methods to manage the product catalog.
      We used MongoDB, Express, React, and Nodejs to develop the project.
      </p>
    </section>

    <div>
        <div style={{textAlign: "center"}}><img src="https://etmayer6.github.io/secoms319/studentInfo/calhf.jpg" className="imagechanger"/>
        </div>
        <div>
        <h1 style={{textAlign: "center"}}>
            Cal Hokanson-Fuchs
        </h1>
        <p style={{textAlign: "center"}}>calhf@iastate.edu</p>
        </div>
    </div>
    
    <div>
        <div style={{textAlign: "center"}}><img src="https://etmayer6.github.io/secoms319/studentInfo/profile.jpg" className="imagechanger"/>
        </div>
      
          <h1 style={{textAlign: "center"}}>Ethan Mayer</h1>
          <p style={{textAlign: "center", margin: "10", marginBottom: "60"}}>
            etmayer@iastate.edu
          </p>
        
    </div>
    <div style={{textAlign: "center"}}>
        <Button
              onClick={() =>
                backFromStudentInfo()
              }
              label="Back"
        />
    </div>
    <div>
        
        <p style={{textAlign: "center", fontSize: "large"}}>
            Professor: Abraham Aldaco, aaldaco@iastate.edu
        </p>
       
    </div>
    </>
  )
}




function getAllProducts() {


  fetch("http://localhost:8081/catalog")
    .then((response) => response.json())
    .then((data) => {
      products = data;

      const renderCatalog = () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <div>
            <div>
              <AllProducts />
            </div>
          </div>
        );
      };

      renderCatalog();

    });
  setTimeout(() => {
    var i = 0;

    products.forEach((element) => {

      var main = document.getElementById("main");


      let id = products[i].id;
      let title = products[i].title;
      let price = products[i].price;
      let description = products[i].description;
      let category = products[i].category;
      let image = products[i].image;
      let rate = products[i].rating.rate;
      let count = products[i].rating.count;

      let idElement = document.createElement("p");
      let titleElement = document.createElement("p");
      let priceElement = document.createElement("p");
      let descriptionElement = document.createElement("p");
      let categoryElement = document.createElement("p");
      let imageElement = document.createElement("div");
      let rateElement = document.createElement("p");
      let countElement = document.createElement("p");


      idElement.innerHTML = `<p> ID: <strong>${id}</strong></p>`;
      titleElement.innerHTML = `<p> Title: <strong>${title}</strong></p>`;
      priceElement.innerHTML = `<p> Price: <strong>${price}</strong></p>`;
      descriptionElement.innerHTML = `<p> Description: <strong>${description}</strong></p>`;
      categoryElement.innerHTML = `<p> Category: <strong>${category}</strong></p>`;
      imageElement.innerHTML = `<img src=${image} alt="..."></img>`;
      rateElement.innerHTML = `<p> Rating: <strong>${rate}</strong></p>`;
      countElement.innerHTML = `<p> Number of ratings: <strong>${count}</strong></p>`;

      main.appendChild(idElement);
      main.appendChild(titleElement);
      main.appendChild(priceElement);
      main.appendChild(descriptionElement);
      main.appendChild(categoryElement);
      main.appendChild(imageElement);
      main.appendChild(rateElement);
      main.appendChild(countElement);

      i++;
    });
  }, 200);


}

function AllProducts() {

  return (
    <body>
      <div style={{ textAlign: "center" }}>
        <div>
          <section>
            <div>
              <h1
                style={{ textAlign: "center" }}
              >
                Product Catalog!
              </h1>

              <div id="main" style={{ textAlign: "center" }}>

              </div>

              <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

function postProduct() {


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div style={{ textAlign: "center" }}>
        <POST />
      </div>
    </div>
  );
  function POST() {

    const [id, setID] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");
    const [category, setCat] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRate] = useState("");
    const [ratingCount, setCount] = useState("");


    const submitPost = (e) => {

      e.preventDefault();

      const formData = {
        "id": id,
        "title": title,
        "price": price,
        "description": description,
        "category": category,
        "image": image,
        "rating": { "rate": rating, "count": ratingCount }
      };

      fetch('http://localhost:8081/addProduct', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(
          formData
        )
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });

      loadFirstPage();
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <label>
            ID:
            <input
              type="number"
              id="id"
              name="id"
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCat(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="url"
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              type="text"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Number of ratings:
            <input
              type="text"
              id="ratingCount"
              name="ratingCount"
              value={ratingCount}
              onChange={(e) => setCount(e.target.value)}
            />
          </label>
        </div>

        <Button onClick={submitPost} label="Submit" style={{ textAlign: "center" }}></Button>
        <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
      </div>
    );
  }
}

function deleteProduct() {


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div>
        <DeleteInput />
      </div>
    </div>
  );

  function DeleteInput() {

    const renderDelete = () => {

      finalChoice = choice;
      console.log(finalChoice);

      //loadFirstPage();


      fetch("http://localhost:8081/catalog")
        .then((response) => response.json())
        .then((data) => {
          products = data;
        });


      setTimeout(() => {

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <div>
            <div>
              <DELETE />
            </div>
          </div>
        );
      }, 200);
    }


    var [choice, setID] = useState("");


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Enter ID of item to delete:</h1>

        <label style={{ textAlign: "center" }}>
          ID:
          <input
            type="number"
            id="choice"
            name="choice"
            value={choice}
            onChange={(e) => setID(e.target.value)}
          />
        </label>
        <div style={{ textAlign: "center" }}>
          <Button onClick={renderDelete} label="Submit" style={{ textAlign: "center" }}></Button>
          <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
        </div>
      </div>
    );

  }

  function DELETE() {
    var i = 1;
    var index;
    var IDchoice = parseInt(finalChoice);

    products.forEach((element) => {

      //console.log(element.id);
      if (element.id === IDchoice) {
        index = i;
      }
      i++;
    });

    //console.log(index);
    i = index - 1;

    const confirmDelete = () => {



      fetch('http://localhost:8081/deleteProduct', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(

          {
            "id": IDchoice
          }
        )
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        }).catch((err) => console.log("Error: " + err))


      i = 0;
      loadFirstPage();
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Item to delete ID: {finalChoice}</h3>
          <h3>Title: {products[i].title}</h3>
          <h3>Price: {products[i].price}</h3>
          <h3>Description: {products[i].description}</h3>
          <h3>Category: {products[i].category}</h3>
          <img src={products[i].image}></img>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button onClick={confirmDelete} label="Confirm Delete" style={{ textAlign: "center" }}></Button>
          <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
        </div>
      </div>
    );

  }
}

var finalChoice;

function updateProduct() {

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <div>
        <UpdateInput />
      </div>
    </div>
  );

  function UpdateInput() {



    const renderUpdate = () => {

      finalChoice = choice;
      console.log(finalChoice);

      //loadFirstPage();


      fetch("http://localhost:8081/catalog")
        .then((response) => response.json())
        .then((data) => {
          products = data;
        });


      setTimeout(() => {

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <div>
            <div>
              <UPDATE />
            </div>
          </div>
        );
      }, 200);
    }



    var [choice, setID] = useState("");


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Enter ID of item to update:</h1>

        <label style={{ textAlign: "center" }}>
          ID:
          <input
            type="number"
            id="choice"
            name="choice"
            value={choice}
            onChange={(e) => setID(e.target.value)}
          />
        </label>
        <div style={{ textAlign: "center" }}>
          <Button onClick={renderUpdate} label="Submit" style={{ textAlign: "center" }}></Button>
          <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
        </div>
      </div>
    );
  }


  function UPDATE() {

    var i = 0;
    var index;

    products.forEach((element) => {

      if (element.id === parseInt(finalChoice)) {
        index = i;
      }
      i++;
    });

    i = 0;


    //console.log(products[3].title);


    const [title, setTitle] = useState(products[index].title);
    const [price, setPrice] = useState(products[index].price);
    const [description, setDesc] = useState(products[index].description);
    const [category, setCat] = useState(products[index].category);
    const [image, setImage] = useState(products[index].image);
    const [rating, setRate] = useState(products[index].rating.rate);
    const [ratingCount, setCount] = useState(products[index].rating.count);

    index++;
    //console.log(finalChoice);

    const submitUpdate = (e) => {

      let IDchoice = parseInt(finalChoice);

      e.preventDefault();

      const formData = {
        "id": IDchoice,
        "title": title,
        "price": price,
        "description": description,
        "category": category,
        "image": image,
        "rating": { "rate": rating, "count": ratingCount }
      };

      fetch('http://localhost:8081/deleteProduct', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(

          {
            "id": IDchoice
          }
        )
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        }).catch((err) => console.log("Error: " + err))



      setTimeout(() => {
        fetch('http://localhost:8081/addProduct', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(
            formData
          )
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          });


        loadFirstPage();
      }, 200);
    }

    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h3>ID: {finalChoice}</h3>
        </div>
        <div>
          <label>
            Title:
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCat(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="url"
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Rating:
            <input
              type="text"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRate(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Number of ratings:
            <input
              type="text"
              id="ratingCount"
              name="ratingCount"
              value={ratingCount}
              onChange={(e) => setCount(e.target.value)}
            />
          </label>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={submitUpdate} label="Submit" style={{ textAlign: "center" }}></Button>
          <Button onClick={loadFirstPage} label="Back" style={{ textAlign: "center" }}></Button>
        </div>
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
            <Button
              onClick={() =>
                ShowStudentInfo()
              }
              label="Show Student Info"
            />
          </section>
          <section>
            <div style={{textAlign: "center"}}>
              <p>Get All Products - Display list of all products</p>
              <p>Add Product - Fill out form to post new product</p>
              <p>Delete Product - Choose ID and delete item with that ID</p>
              <p>Update Product - Change information on product already in database</p>
              <p>Show Student Info - Show student and class information</p>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}

export default App;
