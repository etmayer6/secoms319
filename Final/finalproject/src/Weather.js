import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
// var express = import("express");
// var cors = import("cors");
// var app = express();
// var fs = import("fs");
// var bodyParser = impo("body-parser");
// app.use(cors());
// app.use(bodyParser.json());
// const port = "8081";
// const host = "localhost";

// app.listen(port, () => {
//   console.log("App listening at http://%s:%s", host, port);
// });
// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1:27017";
// const dbName = "finalproject";
// const client = new MongoClient(url);
// const db = client.db(dbName);

// app.get("/listRobots", async (req, res) => {
//   await client.connect();
//   console.log("Node connected successfully to GET MongoDB");
//   const query = {};
//   const results = await db
//     .collection("robots")
//     .find(query)
//     .limit(100)
//     .toArray();
//   console.log(results);
//   res.status(200);
//   res.send(results);
// });
//  const header={
//   background-color:"cadetblue",
//   color: "#fff",
//   padding: 10px 0;
// }


const Button = ({ onClick, label }) => {
  return (
    <button className="coolTitle" onClick={onClick}>
      {label}
    </button>
  );
};

function Recipe() {
  const backFromRecipe = () => {
    loadFirstPage();
  };

  return (
    <div>
      <h3>Here is where we output the recipe!</h3>
      <div className="center">
        <Button onClick={backFromRecipe} label="Back" />
      </div>
    </div>
  );
}

const loadFirstPage = () => {
  window.location.reload();
};

function Forecast(forecastData) {
  const loadRecipe = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <div>
        <Recipe />
      </div>
    );
  };

  return (
    <body
      className="Weather"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${require("./sun-images.jpg")})`,
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
              <h3 id="curTemp" className="coolTitle" />
            </div>
            <div className="center"></div>
          </section>

          <section>
            <div className="center">
              <h3 id="text" className="coolTitle">
                Based on your weather, and preferences we recommend you eat:{" "}
              </h3>
            </div>
            <div className="center">
              <div id="image"></div>
            </div>
            <div className="center">
              <h3 id="text2" className="coolTitle"></h3>
            </div>
          </section>
          <section>
            <div className="center">
              <Button onClick={loadFirstPage} label="Back" />
            </div>
            <div className="center">
              <Button onClick={loadRecipe} label="See Recipe" />
            </div>
          </section>
        </div>
      </div>
    </body>
  );
}
const calculateForecast = (a,b,c,d) => {
  console.log(a,b,c,d);
  let filteredData;
  //THIS SETS FILTERED DATA TO THE OBJECT(IF ANY) THAT FITS THE SELECTIONS
  fetch("data.json")
  .then((response)=>response.json())
  .then((data) => {
    console.log(data);
    jsondata=data.images
    //FILTERS BY TEMP
    filteredData = jsondata.filter(element => element.id == "50-60") ?? [];
    // jsondata = JSON.parse(data);
    console.log("First Check");
    console.log(filteredData);
  let selectElement = document.getElementById("Food");
  console.log("Select Element = " +selectElement);
  console.log("bi");
  console.log(document.getElementById("Food"));
  if (a) {
    console.log("be");
    filteredData = filteredData.filter(element => element.food == a) ?? [];
    console.log("Food is checked");
  }
  console.log("bo");
  selectElement = document.getElementById("Drinks");
  // let drinks = selectElement.value;
  if (b) {
    filteredData = filteredData.filter(element => element.drink == b) ?? [];
    console.log("Drinks are checked");
  }
  selectElement = document.getElementById("Vegetarian");
  // let vegetarian = selectElement.value;
  if (c) {
    filteredData = filteredData.filter(element => element.vegetarian == c) ?? [];
    console.log("Vegetarian is checked");
  }
  selectElement = document.getElementById("Lactose-Free");
  // let lactosefree = selectElement.value;
  if (d) {
    filteredData = filteredData.filter(element => element.dairy == d) ?? [];
    console.log("Lactose-Free is checked");
  }
  console.log("Hi"+filteredData);
  });
  let forecastData;
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched Data:", data);
      forecastData = data;
    });

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <div>
      <Forecast data={forecastData} />
    </div>
  );

  fetch("data.json")
    .then((response) => response.json())
    .then((images) => loadImages(images));
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
      fetch("view.json")
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

  if (temp < 0) {
    index = 0;
  } else if (temp >= 0 && temp < 10) {
    tempForFilter="0-10"
    index = 1;
  } else if (temp >= 10 && temp < 20) {
    tempForFilter="10-20"
    index = 2;
  } else if (temp >= 20 && temp < 30) {
    tempForFilter="20-30"
    index = 3;
  } else if (temp >= 30 && temp < 40) {
    tempForFilter="30-40"
    index = 4;
  } else if (temp >= 40 && temp < 50) {
    tempForFilter="40-50"
    index = 5;
  } else if (temp >= 50 && temp < 60) {
    tempForFilter="50-60"
    index = 6;
  } else if (temp >= 60 && temp < 70) {
    tempForFilter="60-70"
    index = 7;
  } else if (temp >= 70 && temp < 80) {
    tempForFilter="70-80"
    index = 8;
  } else if (temp >= 80 && temp < 90) {
    tempForFilter="80-90"
    index = 9;
  } else if (temp >= 90 && temp < 100) {
    tempForFilter="90-100"
    index = 10;
  } else if (temp >= 100 && temp < 110) {
    tempForFilter="100-110"
    index = 11;
  } else {
    index = 12;
  }


  let image = weather.weather[index].image;

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
const loadImages = (images) => {
  var curImg = document.getElementById("image");
  var curText = document.getElementById("text");
  var curTemp = document.getElementById("curTemp");
  var curText2 = document.getElementById("text2");

  if (temp > 0 && temp <= 10) {
    setTemp = 0;
  } else if (temp > 10 && temp <= 20) {
    setTemp = 1;
  } else if (temp > 20 && temp <= 30) {
    setTemp = 2;
  } else if (temp > 30 && temp <= 40) {
    setTemp = 3;
  } else if (temp > 40 && temp <= 50) {
    setTemp = 4;
  } else if (temp > 50 && temp <= 60) {
    setTemp = 5;
  } else if (temp > 60 && temp <= 70) {
    setTemp = 6;
  } else if (temp > 70 && temp <= 80) {
    setTemp = 7;
  } else if (temp > 80 && temp <= 90) {
    setTemp = 8;
  } else if (temp > 90 && temp <= 100) {
    setTemp = 9;
  } else if (temp > 100 && temp <= 110) {
    setTemp = 10;
  }
  
  let url = images.images[setTemp].url;
  let name = images.images[setTemp].name;
  let desc = images.images[setTemp].desc;

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

let HandleChange = (a,b) =>{
  if(!a){
    return true;
  }
  else{
    return false;
  }
}
const Weather = () => {
  let [FoodCheck, setFoodCheck]=useState(false);
  let [DrinkCheck, setDrinkCheck]=useState(false);
  let [VegetarianCheck, setVegetarianCheck]=useState(false);
  let [DairyCheck, setDairyCheck]=useState(false);
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
            <div className="center">
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Food"
                  name="food"
                  type="checkbox"
                  value={FoodCheck} onChange={e=>FoodCheck=HandleChange(FoodCheck,true)}
                  />
                Food
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Drinks"
                  name="drinks"
                  type="checkbox"
                  value={DrinkCheck} onChange={e=>DrinkCheck=HandleChange(DrinkCheck,true)}
                  />
              
                Drinks
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Vegetarian"
                  name="vegetarian"
                  type="checkbox"
                  value={VegetarianCheck} onChange={e=>VegetarianCheck=HandleChange(VegetarianCheck,true)}
                  />
                Vegetarian
              </label>
              <label className="coolTitle">
                <input
                  className="coolTitle"
                  id="Lactose-Free"
                  name="lactose-free"
                  type="checkbox"
                  value={DairyCheck} onChange={e=>DairyCheck=HandleChange(DairyCheck,true)}
                  />
                Lactose-Free
              </label>
            </div>
          </div>
          <div className="center">
            <Button
              onClick={()=>calculateForecast(FoodCheck,DrinkCheck,VegetarianCheck,DairyCheck)}
              label="Calculate my Foodie Forecast!"
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Weather;
