//document.getElementById("foodcast").style["boxShadow"] ="0 0 0 5 5 #ff0000";

var temperature;


fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/42.034534%2C-93.620369?unitGroup=metric&key=K6SLSU6G3HZ7JJ8DGGGMQDVBK&contentType=json")
.then(response => response.json())
.then(weatherData => findTemperature(weatherData));

function findTemperature(weatherData){

    temperature = weatherData.days[0].temp;
    
    //convert to farenheit
    temperature = (temperature * 9/5) + 32;

    fetch("data.json")
    .then(response => response.json())
    .then(food => loadWeather(food));

}





function loadWeather(food){


    var tempFood = document.getElementById("weather");
    var imgFood = document.getElementById("image");
    var txtFood = document.getElementById("text");

    //temperature = weatherData.days[0].temp;

let index;

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

let title = food.food[index].title;
let image = food.food[index].image;
let text = food.food[index].text;

let outside = document.createElement("p");
outside.innerHTML = `<p class="coolfont"> Current temperature in Ames: <strong>${temperature}</strong> <br> 
Based off the temperature outside, you should eat this: <strong>${title}</strong></p>`;

let img = document.createElement("div");
img.innerHTML = `<img src=${image} class="imagechanger"></img>`;

let txt = document.createElement("p");
txt.innerHTML = `<p class="coolfont"> ${text}</p>`;

tempFood.appendChild(outside);
imgFood.appendChild(img);
txtFood.appendChild(txt);

index = 0;

}