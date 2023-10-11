
fetch("data.json")
.then(response => response.json())
.then(weather => loadWeather(weather));

function loadWeather(weather){




    var imgWeather = document.getElementById("image");
    var txtWeather = document.getElementById("text");


let temperature = 21;//need to assign temperature to the input value of the raspberry pi
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

let title = weather.weather[index].title;
let image = weather.weather[index].image;
let text = weather.weather[index].text;

let img = document.createElement("div");
img.innerHTML = `<img src=${image} class="imagechanger"></img>`;

let txt = document.createElement("p");
txt.innerHTML = `<p class="coolfont"> <strong>${title}</strong>, ${text}</p>`;

imgWeather.appendChild(img);
txtWeather.appendChild(txt);

index = 0;

}