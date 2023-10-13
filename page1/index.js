


let temp = 15;
chrome.browserAct
let setTemp = 0;
fetch("data.json")
    .then(response => response.json())
    .then(myImages => loadImages(myImages));
function loadImages(myImages) {
    if (temp > 0 && temp <= 10) {
        setTemp= "0-10"
    }
    else if (temp > 10 && temp <= 20) {
        setTemp= "10-20"
    }
    else if (temp > 20 && temp <= 30) {
        setTemp= "20-30"
    }
    else if (temp > 30 && temp <= 40) {
        setTemp= "30-40"
    }
    else if (temp > 40 && temp <= 50) {
        setTemp= "40-50"
    }
    else if (temp > 50 && temp <= 60) {
        setTemp= "50-60"
    }
    else if (temp > 60 && temp <= 70) {
        setTemp= "60-70"
    }
    else if (temp > 70 && temp <= 80) {
        setTemp= "70-80"
    }
    else if (temp > 80 && temp <= 90) {
        setTemp= "80-90"
    }
    else if (temp > 90 && temp <= 100) {
        setTemp= "90-100"
    }
    else if (temp > 100 && temp <= 110) {
        setTemp= "100-110"
    }
    //for all images in the json file
    for (var i = 0; i < myImages.images.length; i++) {
        //find the image whose id matches the temperature
        if (myImages.images[i].id === setTemp) {
            let curImg = document.getElementById("image");
            let curText = document.getElementById("text");
            let curTemp = document.getElementById("curTemp");
            //sets the image in the html to that url
            curImg.innerHTML = `<img src=${myImages.images[i].url} class="imagechanger" alt="..."></img>`;
            curText.innerHTML= `<p class=center> <strong>${myImages.images[i].name}</strong></p>`;
            curTemp.innerHTML=`<h3 id="forecast" class="coolTitle">The current temperature in Ames, Iowa is: ${temp} degrees</h3>`;
        }
    };
    
}