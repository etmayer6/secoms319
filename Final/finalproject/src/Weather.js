import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
//import Forecast from "forecast.js";

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

function Recipe() {
  return (
    <div>
      <h3>Here is where we output the recipe!</h3>
      <div className="center">
        <Button onClick={calculateForecast} label="Back" />
      </div>
    </div>
  );
}

function Forecast(forecastData) {
  const refreshPage = () => {
    window.location.reload();
  };

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
              <Button onClick={refreshPage} label="Back" />
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
const calculateForecast = () => {
  let selectElement = document.querySelector("#Food");
  //console.log(document.querySelector('#Food'));
  if (selectElement.checked) {
    console.log("Food is checked");
  }

  selectElement = document.querySelector("#Drinks");
  // let drinks = selectElement.value;
  if (selectElement.checked) {
    console.log("Drinks are checked");
  }
  selectElement = document.querySelector("#Vegetarian");
  // let vegetarian = selectElement.value;
  if (selectElement.checked) {
    console.log("Vegetarian is checked");
  }
  selectElement = document.querySelector("#Lactose-Free");
  // let lactosefree = selectElement.value;
  if (selectElement.checked) {
    console.log("Lactose-Free is checked");
  }

  //if(images.images[setTemp].food == food){use food and so forth}

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

const loadTemperature = (weather) => {
  var tempWeather = document.getElementById("curTemp");
  var imgWeather = document.getElementById("image");

  //temperature = weatherData.days[0].temp;

  let index;

  console.log(temp);

  if (temp < 0) {
    index = 0;
  } else if (temp >= 0 && temp < 10) {
    index = 1;
  } else if (temp >= 10 && temp < 20) {
    index = 2;
  } else if (temp >= 20 && temp < 30) {
    index = 3;
  } else if (temp >= 30 && temp < 40) {
    index = 4;
  } else if (temp >= 40 && temp < 50) {
    index = 5;
  } else if (temp >= 50 && temp < 60) {
    index = 6;
  } else if (temp >= 60 && temp < 70) {
    index = 7;
  } else if (temp >= 70 && temp < 80) {
    index = 8;
  } else if (temp >= 80 && temp < 90) {
    index = 9;
  } else if (temp >= 90 && temp < 100) {
    index = 10;
  } else if (temp >= 100 && temp < 110) {
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

const Weather = () => {
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
            <div>{getTemp()}</div>
            <section>
              <div id="image" className="center"></div>
            </section>
          </section>
          <div className="center">
            <input id="Food" name="food" type="checkbox" value="1" />
            <input id="Drinks" name="drinks" type="checkbox" value="1"/>
            <input id="Vegetarian" name="vegetarian" type="checkbox" value="1"/>
            <input id="Lactose-Free" name="lactose-free" type="checkbox" value="1"/>
          </div>
          <div className="center">
            <Button
              onClick={calculateForecast}
              label="Calculate my Foodie Forecast!"
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Weather;
