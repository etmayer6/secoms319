

var temperature;
var feelslike;
var precipprob;
var preciptype;
var windspeed;
var humidity;


fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.034534%2C-93.620369?unitGroup=metric&key=K6SLSU6G3HZ7JJ8DGGGMQDVBK&contentType=json")
.then(response => response.json())
.then(weatherData => findTemperature(weatherData));

function findTemperature(weatherData){

    temperature = weatherData.days[0].temp;
    feelslike = weatherData.days[0].feelslike;
    precipprob = weatherData.days[0].precipprob;

    if(precipprob == 0){
        preciptype = "none";
    }
    else{
        preciptype = weatherData.days[0].preciptype[0];
    }
    windspeed = weatherData.days[0].windspeed;
    humidity = weatherData.days[0].humidity;
    //convert to farenheit
    temperature = (temperature * 9/5) + 32;
    feelslike = (feelslike * 9/5) + 32;
    //convert to mph
    windspeed = Math.ceil(windspeed/1.609);
    temperature = Math.floor(temperature);

    if(!temperature){
        temperature = -1;
        feelslike = -1;
        precipprob = -1;
        preciptype = "unknown";
        windspeed = -1;
        humidity = -1;
    }


    fetch("data.json")
    .then(response => response.json())
    .then(weather => loadWeather(weather));

}





function loadWeather(weather){


    var tempWeather = document.getElementById("weather");
    var imgWeather = document.getElementById("image");
    var txtWeather = document.getElementById("text");
    var moreinfoWeather = document.getElementById("moreinfo");
    //temperature = weatherData.days[0].temp;

let index;

console.log(temperature);

if(temperature < 0){
    index = 0;
}
else if(temperature >= 0 && temperature < 10){
    index = 1;
}
else if(temperature >= 10 && temperature < 20){
    index = 2;
}
else if(temperature >= 20 && temperature < 30){
    index = 3;
}
else if(temperature >= 30 && temperature < 40){
    index = 4;
}
else if(temperature >= 40 && temperature < 50){
    index = 5;
}
else if(temperature >= 50 && temperature < 60){
    index = 6;
}
else if(temperature >= 60 && temperature < 70){
    index = 7;
}
else if(temperature >= 70 && temperature < 80){
    index = 8;
}
else if(temperature >= 80 && temperature < 90){
    index = 9;
}
else if(temperature >= 90 && temperature < 100){
    index = 10;
}
else if(temperature >= 100 && temperature < 110){
    index = 11;
}
else{
    index = 12;
}

console.log(index);

let title = weather.weather[index].title;
let image = weather.weather[index].image;
let text = weather.weather[index].text;

let outside = document.createElement("p");
outside.innerHTML = `<p class="coolfont"> Current temperature in Ames: <strong>${temperature}</strong> <br><br> 
Based off the temperature outside, your view may look something like this: </p>`;

let img = document.createElement("div");
img.innerHTML = `<img src=${image} class="imagechanger"></img>`;

let txt = document.createElement("p");
txt.innerHTML = `<p class="coolfont"> The climate outside feels: <strong>${title}</strong>, ${text}</p>`;


let info = document.createElement("p");
info.innerHTML = `<p class="coolfont"> Feels like: <strong>${feelslike}</strong><br>
                                    Humidity: <strong>${humidity}</strong>% <br>
                                    Probability of precipitation: <strong>${precipprob}</strong>% <br>
                                    Type of precipitation: <strong>${preciptype}</strong> <br>
                                    Windspeed: <strong>${windspeed}</strong> MPH <br>

</p>`

tempWeather.appendChild(outside);
imgWeather.appendChild(img);
txtWeather.appendChild(txt);
moreinfoWeather.appendChild(info);

index = 0;

}