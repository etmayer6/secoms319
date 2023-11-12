import React from "react";
import ReactDOM from "react-dom";

var temp;
const getTemp = () => {
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
    fetch("data.json")
      .then((response) => response.json())
      .then((images) => loadImages(images));
  }
};

var setTemp = 0;
function loadImages(images) {


    var curImg = document.getElementById("image");
    var curText = document.getElementById("text");
    var curTemp = document.getElementById("curTemp");
    var curText2 = document.getElementById("text2");

    if (temp > 0 && temp <= 10) {
        setTemp= 0;
    }
    else if (temp > 10 && temp <= 20) {
        setTemp= 1;
    }
    else if (temp > 20 && temp <= 30) {
        setTemp= 2;
    }
    else if (temp > 30 && temp <= 40) {
        setTemp= 3;
    }
    else if (temp > 40 && temp <= 50) {
        setTemp= 4;
    }
    else if (temp > 50 && temp <= 60) {
        setTemp= 5;
    }
    else if (temp > 60 && temp <= 70) {
        setTemp= 6;
    }
    else if (temp > 70 && temp <= 80) {
        setTemp= 7;
    }
    else if (temp > 80 && temp <= 90) {
        setTemp= 8;
    }
    else if (temp > 90 && temp <= 100) {
        setTemp= 9;
    }
    else if (temp > 100 && temp <= 110) {
        setTemp= 10;
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
    txt.innerHTML= `<p id="forecast" class=center> <strong>${name}</strong></p>`;
    tmp.innerHTML=`<h3 id="forecast" >The current temperature in Ames, Iowa is: ${temp} degrees</h3>`;
    txt2.innerHTML=`<h3 id="forecast" >${desc}</h3>`;

    curImg.appendChild(img);
    curText.appendChild(txt);
    curTemp.appendChild(tmp);
    curText2.appendChild(txt2);


}
const Weather = () => {
  return (
    <div
      className="Weather"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${require("./sun-images.jpg")})`,
      }}
    >
      <body>
        <div>
          <header style={{ borderRadius: "40px" }}>
            <nav></nav>
          </header>
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
            <div className="center">
              <h3
                id="stuff"
                style={{ textAlign: "center" }}
                className="coolTitle"
              >
                Based off the current temperature, we recommend:
              </h3>
            </div>
          </section>
          <section>
            <div className="center">
              <h3 id="text" className="coolTitle"></h3>
            </div>
            <div className="center">
              <div id="image"></div>
            </div>
            <div className="center">
              <h3 id="text2" className="coolTitle"></h3>
            </div>
          </section>
        </div>
      </body>
    </div>
  );
};

export default Weather;
