import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Container from 'react-bootstrap/Container';
//bootstrap
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha256-2TnSHycBDAm2wpZmgdi0z81kykGPJAkiUY+Wf97RbvY=" crossorigin="anonymous"></link>

const Button = ({ onClick, label }) => {
  return (
    <button className="coolTitle" onClick={onClick}>
      {label}
    </button>
  );
};

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
        <h1 style={{textAlign: "center"}}className="coolfont">
            SE COMS 319: Construction of User Interfaces
        </h1>
    </section>
    <section>
        <h1 style={{textAlign: "center"}}className="coolfont">
            Developer Credits
        </h1>
    </section>
    <section>
        <h1 style={{textAlign: "center"}}className="coolfont">
            December 3, 2023
        </h1>
    </section>

    <div className="center">
        <div><img src="https://etmayer6.github.io/secoms319/studentInfo/calhf.jpg" className="imagechanger"/>
        </div>
        <div>
        <h1 className="coolfont">
            Cal Hokanson-Fuchs
        </h1>
        <p style={{textAlign: "center"}} className="coolfont">calhf@iastate.edu</p>
        </div>
    </div>
    
    <div className="center">
        <div><img src="https://etmayer6.github.io/secoms319/studentInfo/profile.jpg" className="imagechanger"/>
        </div>
      
          <h1 className="coolfont">Ethan Mayer</h1>
          <p style={{textAlign: "center", margin: "10", marginBottom: "60"}} className="coolfont">
            etmayer@iastate.edu
          </p>
        
    </div>
    <div className="center">
        <Button
              onClick={() =>
                backFromStudentInfo()
              }
              label="Back"
        />
    </div>
    <div className="footer">
        
        <p style={{textAlign: "center", fontSize: "large"}} className="coolfont" >
            Professor: Abraham Aldaco, aaldaco@iastate.edu
        </p>
       
    </div>
    </>
  )
}



function Recipe() {
  const backFromRecipe = () => {
    loadFirstPage();
  };

  //HTML FOR displaying the recipe page within the recipe
  return (
  
    <body className="Recipe"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://t4.ftcdn.net/jpg/05/52/88/59/360_F_552885945_3mKs02TFNxZS8ztXp2wYpPWDyjA57fXx.jpg")`,
      }}>   
        <div className="center" >
          <div id="recipe">
            
          </div>

          <div className="center">
            <Button onClick={backFromRecipe} label="Back" />
          </div>
        </div>
    </body>
    
  );
}

const loadFirstPage = () => {
  window.location.reload();
};

function POST() {
  const [foodName, setName] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [recipe, setRecipe] = useState("");
  const [temperature, setTemperature] = useState(tempForFilter);

  let FoodCheck = false;
  let DrinkCheck = false;
  let VegetarianCheck = false;
  let LactoseCheck = false;

  const postNewFood = (e) => {
    e.preventDefault();

    let FoodChecked = FoodCheck.toString();
    let DrinkChecked = DrinkCheck.toString();
    let VegetarianChecked = VegetarianCheck.toString();
    let LactoseChecked = LactoseCheck.toString();

    console.log("Food name: " + foodName);
    console.log("URL: " + url);
    console.log("Description: " + desc);
    console.log("Recipe: " + recipe);
    console.log("Temperature range: " + temperature);
    console.log(FoodChecked, DrinkChecked, VegetarianChecked, LactoseChecked);

    const formData = {
      id: temperature,
      food: FoodChecked,
      drink: DrinkChecked,
      vegetarian: VegetarianChecked,
      dairy: LactoseChecked,
      name: foodName,
      url: url,
      desc: desc,
      recipe: recipe
    };


      fetch('http://localhost:8081/addFood', {
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
  };

  return (
    <body
      className="Weather"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${require("https://etmayer6.github.io/secoms319/page1/sun-images.jpg")})`,
      }}
    >
      <div>
        <section>
          <div className="center">
            <h1
              id="forecast"
              style={{ textAlign: "center" }}
              className="coolTitle"
            >
              Foodie Forecast!
            </h1>
          </div>
        </section>
        <section>
          <div className="center">
            <h3 className="coolTitle3">
              We were unable to calculate a food item that matches your search
              queries. Please try adding your own!
            </h3>
          </div>
        </section>
          <div className="center">
            <label className="coolTitle3">
              Name of food:
              <input
                className="coolTitle"
                type="text"
                id="Name"
                name="name"
                value={foodName}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="coolTitle3">
              Image URL:
              <input
                className="coolTitle"
                type="url"
                id="Url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <label className="coolTitle3">
              Description:
              <input
                className="coolTitle"
                type="text"
                id="Desc"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <label className="coolTitle3">
              Recipe:
              <input
                className="coolTitle"
                type="url"
                id="Recipe"
                name="recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
              />
            </label>
          </div>
          <div className="center">
            <label className="coolTitle3">
              Temperature:
              <select
                className="coolTitle"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              >
                <option>0-10</option>
                <option>10-20</option>
                <option>20-30</option>
                <option>30-40</option>
                <option>40-50</option>
                <option>50-60</option>
                <option>60-70</option>
                <option>70-80</option>
                <option>80-90</option>
                <option>90-100</option>
                <option>100-110</option>
              </select>
            </label>
          </div>
          <div className="center">
            <label className="coolTitle">
              <input
                className="coolTitle"
                id="Food"
                name="food"
                type="checkbox"
                value={FoodCheck}
                onChange={(e) => (FoodCheck = HandleChange(FoodCheck, true))}
              />
              Is Food?
            </label>
            <label className="coolTitle">
              <input
                className="coolTitle"
                id="Drinks"
                name="drinks"
                type="checkbox"
                value={DrinkCheck}
                onChange={(e) => (DrinkCheck = HandleChange(DrinkCheck, true))}
              />
              Is Drink?
            </label>
            <label className="coolTitle">
              <input
                className="coolTitle"
                id="Vegetarian"
                name="vegetarian"
                type="checkbox"
                value={VegetarianCheck}
                onChange={(e) =>
                  (VegetarianCheck = HandleChange(VegetarianCheck, true))
                }
              />
              Is Vegetarian?
            </label>
            <label className="coolTitle">
              <input
                className="coolTitle"
                id="Lactose-Free"
                name="lactose-free"
                type="checkbox"
                value={LactoseCheck}
                onChange={(e) =>
                  (LactoseCheck = HandleChange(LactoseCheck, true))
                }
              />
              Is Dairy?
            </label>
          </div>
          <section>
            <div className="center">
              <Button className="coolTitle3" onClick={postNewFood} label="Submit"></Button>
            </div>
            <div className="center">
              <Button className="coolTitle3" onClick={loadFirstPage} label="Back"></Button>
            </div>
          </section>
      </div>
    </body>
  );
}

function Forecast() {
  const loadRecipe = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>
        <Recipe />
      </div>
    );

    const appendRecipe = () => {
      console.log(finalFilteredArray[0].recipe);

      let recipe = finalFilteredArray[0].recipe;

      let recipeID = document.getElementById("recipe");

      let recipeHTML = document.createElement("div");

      recipeHTML.innerHTML = `<iframe src=${recipe} height="700px" width="100%"></iframe>`;

      recipeID.appendChild(recipeHTML);
    };

    setTimeout(() => {
      appendRecipe();
    }, 200);
  };

  return (
    <body
      className="Weather"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${require("https://etmayer6.github.io/secoms319/page1/sun-images.jpg")})`,
      }}
    >
      <div>
        <div>
          <section>
            <div className="center">
              <h1
                id="forecast"
                style={{ textAlign: "center" }}
                className="coolTitle"
              >
                Foodie Forecast!
              </h1>
            </div>
          </section>
          <section>
            <div className="center">
              <h3 id="temperature" className="coolTitle" />
            </div>
          </section>

          <section>
            <div className="center">
              <h3 id="text" className="coolTitle">
                Based on your weather, and preferences we recommend you eat:{" "}
              </h3>
            </div>
          </section>
          <section>
            <div className="center">
              <div id="img"></div>
            </div>
          </section>
          <section>
            <div className="center">
              <h3 id="text2" className="coolTitle"></h3>
            </div>
          </section>
          <section>
            <div className="center">
              <Button onClick={loadRecipe} label="See Recipe" />
            </div>
            <div className="center">
              <Button onClick={loadFirstPage} label="Back" />
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}
var finalFilteredArray = [];

const calculateForecast = (a, b, c, d) => {
  const filterJSON = (a, b, c, d) => {
    console.log(a, b, c, d);
    //THIS SETS FILTERED DATA TO THE OBJECT(IF ANY) THAT FITS THE SELECTIONS
    //fetch("http://localhost:8081/foods")
    fetch("http://localhost:8081/foods")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        jsondata = data;

        const temperatureFilteredArray = [];

        console.log(jsondata);

        jsondata.forEach((element) => {
          if (element.id == tempForFilter) {
            temperatureFilteredArray.push(element);
          }
        });

        console.log("Temperature filter");
        console.log(temperatureFilteredArray);

        const foodFilteredArray = [];
        //if food is checked
        if (a) {
          temperatureFilteredArray.forEach((element) => {
            if (element.food == "true") {
              console.log("Food = true");
              foodFilteredArray.push(element);
            }
          });
        } else {
          temperatureFilteredArray.forEach((element) => {
            if (element.food == "false") {
              console.log("Food = false");
              foodFilteredArray.push(element);
            }
          });
        }
        console.log("Food filter");
        console.log(foodFilteredArray);

        const drinkFilteredArray = [];
        //if drink is checked
        if (b) {
          foodFilteredArray.forEach((element) => {
            if (element.drink == "true") {
              console.log("Drink = true");
              drinkFilteredArray.push(element);
            }
          });
        } else {
          foodFilteredArray.forEach((element) => {
            if (element.drink == "false") {
              console.log("Drink = false");
              drinkFilteredArray.push(element);
            }
          });
        }
        console.log("Drink filter");
        console.log(drinkFilteredArray);

        const vegetarianFilteredArray = [];
        //if vegetarian is checked
        if (c) {
          drinkFilteredArray.forEach((element) => {
            if (element.vegetarian == "true") {
              console.log("Veg = true");
              vegetarianFilteredArray.push(element);
            }
          });
        } else {
          drinkFilteredArray.forEach((element) => {
            if (element.vegetarian == "false") {
              console.log("Veg = false");
              vegetarianFilteredArray.push(element);
            }
          });
        }
        console.log("Vegetarian filter");
        console.log(vegetarianFilteredArray);

        //if dairy is checked
        if (d) {
          vegetarianFilteredArray.forEach(element => {

            if (element.dairy == "true") {
              finalFilteredArray.push(element);
            }
          });
        }
        else {
          vegetarianFilteredArray.forEach(element => {

            if (element.dairy == "false") {
              finalFilteredArray.push(element);
            }
          });
        }
        console.log("Lactose filter");
        console.log(finalFilteredArray);

        // console.log("rendered");
      });
  };

  filterJSON(a, b, c, d);

  setTimeout(() => {
    if (finalFilteredArray.length != 0) {
      const renderForecast = () => {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <div>
            <div>
              <Forecast />
            </div>
          </div>
        );
      };

      renderForecast();

      // console.log("rendered");

      setTimeout(() => {
        loadImages();
      }, 200);
    } else {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <div>
          <div>
            <POST />
          </div>
        </div>
      );
    }
  }, 200);
};

var temp;
var hasRun = false;
const getTemp = () => {
  if (hasRun === false) {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.034534%2C-93.620369?unitGroup=metric&key=K6SLSU6G3HZ7JJ8DGGGMQDVBK&contentType=json"
    )
      .then((response) => response.json())
      .then((weatherData) => findTemperature(weatherData));

    function findTemperature(weatherData) {
      temp = weatherData.days[0].temp;
      //convert to farenheit
      temp = (temp * 9) / 5 + 32;
      temp = Math.floor(temp);

      console.log(temp);
      //if temp is null give error value
      if (!temp) {
        temp = -1;
      }

      //then run the loadImages function after getting temp, since we need temp first
      fetch("http://localhost:8081/images")
        .then((response) => response.json())
        .then((weather) => loadTemperature(weather));
    }
  }
  hasRun = true;
};
var tempForFilter;
const loadTemperature = (weather) => {
  var tempWeather = document.getElementById("curTemp");
  var imgWeather = document.getElementById("image");

  //temperature = weatherData.days[0].temp;

  let index;

  console.log(temp);
  console.log(weather);

  if (temp < 0) {
    index = 0;
  } else if (temp >= 0 && temp < 10) {
    tempForFilter = "0-10";
    index = 1;
  } else if (temp >= 10 && temp < 20) {
    tempForFilter = "10-20";
    index = 2;
  } else if (temp >= 20 && temp < 30) {
    tempForFilter = "20-30";
    index = 3;
  } else if (temp >= 30 && temp < 40) {
    tempForFilter = "30-40";
    index = 4;
  } else if (temp >= 40 && temp < 50) {
    tempForFilter = "40-50";
    index = 5;
  } else if (temp >= 50 && temp < 60) {
    tempForFilter = "50-60";
    index = 6;
  } else if (temp >= 60 && temp < 70) {
    tempForFilter = "60-70";
    index = 7;
  } else if (temp >= 70 && temp < 80) {
    tempForFilter = "70-80";
    index = 8;
  } else if (temp >= 80 && temp < 90) {
    tempForFilter = "80-90";
    index = 9;
  } else if (temp >= 90 && temp < 100) {
    tempForFilter = "90-100";
    index = 10;
  } else if (temp >= 100 && temp < 110) {
    tempForFilter = "100-110";
    index = 11;
  } else {
    index = 12;
  }

  let image = weather[0].weather[index].image;

  let outside = document.createElement("p");
  outside.innerHTML = `<p class="coolfont"> Current temperature in Ames: <strong>${temp}</strong> <br><br> 
Based off the temperature outside, your view may look something like this: </p>`;

  let img = document.createElement("div");
  img.innerHTML = `<img src=${image} class="imagechanger"></img>`;

  tempWeather.appendChild(outside);
  imgWeather.appendChild(img);
};
let jsondata;

//sets jsondata to data

var setTemp = 0;
const loadImages = () => {
  var images = finalFilteredArray;

  console.log(images);

  var curImg = document.getElementById("img");
  var curText = document.getElementById("text");
  var curTemp = document.getElementById("temperature");
  var curText2 = document.getElementById("text2");

  console.log(curImg);
  console.log(curText);
  console.log(curTemp);
  console.log(curText2);

  console.log(images[0].url);
  let url = images[setTemp].url;
  let name = images[setTemp].name;
  let desc = images[setTemp].desc;

  let img = document.createElement("div");
  let txt = document.createElement("p");
  let tmp = document.createElement("h3");
  let txt2 = document.createElement("h3");
  //sets the image in the html to that url
  img.innerHTML = `<img src=${url} class="imagechanger" alt="..."></img>`;
  txt.innerHTML = `<p id="forecast" class=center> <strong>${name}</strong></p>`;
  tmp.innerHTML = `<h3 id="forecast" >The current temperature in Ames, Iowa is: ${temp} degrees</h3>`;
  txt2.innerHTML = `<h3 id="forecast" >${desc}</h3>`;

  curImg.appendChild(img);
  curText.appendChild(txt);
  curTemp.appendChild(tmp);
  curText2.appendChild(txt2);
};

// style={{
//   backgroundSize: "cover",
//   backgroundImage: `url(https://i.guim.co.uk/img/media/8d904ba5091c05f48cd173406dfa974244e27732/93_193_4090_2454/master/4090.jpg?width=620&dpr=2&s=none)`
// }}

let HandleChange = (a, b) => {
  if (!a) {
    return true;
  } else {
    return false;
  }
};
const Weather = () => {
  let [FoodCheck, setFoodCheck] = useState(false);
  let [DrinkCheck, setDrinkCheck] = useState(false);
  let [VegetarianCheck, setVegetarianCheck] = useState(false);
  let [DairyCheck, setDairyCheck] = useState(false);
  return (
    <body
      className="Weather"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://t4.ftcdn.net/jpg/04/61/23/23/360_F_461232389_XCYvca9n9P437nm3FrCsEIapG4SrhufP.jpg)`,
      }}
    >
      <div>
        <div>
          <section>
            <div className="center">
              <h1
                id="forecast"
                style={{ textAlign: "center" }}
                className="coolTitle2"
              >
                Foodie Forecast!
              </h1>
            </div>
          </section>
          <section>
            <div className="center">
              <h3 id="curTemp" className="coolTitle2" />
            </div>
            <div className="center"></div>
            <div>{getTemp()}</div>
            <section>
              <div id="image" className="center"></div>
            </section>
          </section>
          <div className="center">
            <div className="coolTitle2">
              <h3 className="coolTitle2">Food selection options:</h3>
            </div>

            <div className="center">
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Food"
                  name="food"
                  type="checkbox"
                  value={FoodCheck}
                  onChange={(e) => (FoodCheck = HandleChange(FoodCheck, true))}
                />
                Food
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Drinks"
                  name="drinks"
                  type="checkbox"
                  value={DrinkCheck}
                  onChange={(e) =>
                    (DrinkCheck = HandleChange(DrinkCheck, true))
                  }
                />
                Drinks
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Vegetarian"
                  name="vegetarian"
                  type="checkbox"
                  value={VegetarianCheck}
                  onChange={(e) =>
                    (VegetarianCheck = HandleChange(VegetarianCheck, true))
                  }
                />
                Vegetarian
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Lactose-Free"
                  name="lactose-free"
                  type="checkbox"
                  value={DairyCheck}
                  onChange={(e) =>
                    (DairyCheck = HandleChange(DairyCheck, true))
                  }
                  //I realize that the logic between this and our json file is backwards, so I'm changing this from lactose-free to the opposite(dairy)
                />
                Dairy
              </label>
            </div>
          </div>
          <div className="center">
            <Button
              onClick={() =>
                calculateForecast(
                  FoodCheck,
                  DrinkCheck,
                  VegetarianCheck,
                  DairyCheck
                )
              }
              label="Calculate my Foodie Forecast!"
            />
           
          </div>
          <div className="center">
          <Button
              onClick={() =>
                ShowStudentInfo()
              }
              label="Show Student Info"
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Weather;
