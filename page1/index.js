document.getElementById("forecast").style.boxShadow = "0 0 5px #999999";

let curImg = document.getElementById("image");
let temp = 50;

fetch("data.json")
    .then(response => response.json())
    .then(myImages => loadImages(myImages));
function loadImages(myImages) {
    if (temp > 0 && temp < 10) {

    }
    else if (temp > 10 && temp < 20) {
        //finds the image matching the temperature
        for (var i = 0; i < myImages.images.length; i++) {
            if (myImages.images[i] === "10-20") {
                curImg = myImages.images[i];
            }
        };
    }
    else if (temp > 20 && temp < 30) {

    }
    else if (temp > 30 && temp < 40) {

    }
    else if (temp > 40 && temp < 50) {

    }
    else if (temp > 50 && temp < 60) {

    }
    else if (temp > 60 && temp < 70) {
        //finds the image matching the temperature
        for (var i = 0; i < myImages.images.length; i++) {
            if (myImages.images[i] === "60-70") {
                //sets the image in the html to that url
                curImg.innerHTML = `<img src=${myImages.images[i].url} class="card-img-top" alt="..."></img>`;
            }
        };
    }
    else if (temp > 70 && temp < 80) {
        //finds the image matching the temperature
        for (var i = 0; i < myImages.images.length; i++) {
            if (myImages.images[i] === "70-80") {
                curImg.innerHTML = `<img src=${myImages.images[i].url} class="card-img-top" alt="..."></img>`;
            }
        };
    }
    else if (temp > 80 && temp < 90) {

    }
    else if (temp > 90 && temp < 100) {

    }
    else if (temp > 100 && temp < 110) {

    }
    
}