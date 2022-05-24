'use strict'

// Variables
let btn;
let input;
let error = 'error';
let inputValue;
let cityName = 'Могилёв';
let body = document.querySelector('body');
let widget;

//Render HTML function
function renderHtml(forecastObj) {
    let iconCode = forecastObj?.weather[0]?.icon;
    //html code
    let html = `
    <div class="widget">
        <p class="now">The weather is now</p>
        <!--Weather picture-->
        <div class="weather-icon">
            <img src="./img/${iconCode}.svg" alt="icon">
        </div>
        <!--Weather description-->
        <div class="weather-description">${forecastObj?.weather[0]?.description}</div>
        <div class="city-name">${forecastObj?.name}</div>
        <div class="items">
            <!--Curent wind speed-->
            <div class="part">
                <p class="param">Wind</p>
                <img class="wind-img" src="./img/tornado.svg" alt="wind">
                <p class="text-part">${Math.round(forecastObj?.wind?.speed)} m/s</p>
            </div>
            <p class="temperature">${Math.round(forecastObj?.main?.temp-273) +'&deg;'}</p>
            <!-- Current Humidity-->
            <div class="part">
                <p class="param">Humidity</p>
                <img class="humidity-img" src="./img/wet.png" alt="humidity-img">
                <p class="text-part">${forecastObj?.main?.humidity} %</p>
            </div>
        </div>
<!--Weather forecast-->
 <div class="forecast">
            <div class="forecast-block">
                <p class="param">00:00</p>
                <img class="night-img" src="./img/01d.svg" alt="tonight picture">
                <p class="forecast-temp">${Math.round(forecastObj?.main.temp-273) +'&deg;'}</p>
            </div>
            <div class="forecast-block">
                <p class="param">12:00</p>
                <img class="daytime-img" src="./img/02n.svg" alt="daytime picture">
                <p class="forecast-temp">13</p>
            </div>
            <div class="forecast-block">
                <p class="param">20:00</p>
                <img class="daytime-img" src="./img/03n.svg" alt="daytime picture">
                <p class="forecast-temp">10</p>
            </div>
        </div>
<!--input-->
        <div class="getcity">
            <input placeholder="Enter the name of the city" class="city-input" type="text" size="30" value="" id="inputValue">
            <button class="btn" id="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>  
    </div>`;
    // insert HTML code
       body.insertAdjacentHTML('afterbegin', html);

    getOtherCity();
}

// Get other city function
function getOtherCity() {
    input = document.getElementsByTagName('input');
    btn = document.getElementById('btn');
    btn.addEventListener('click', ()=> {
        // Get input value
        inputValue = document.getElementById('inputValue').value;
        cityName = inputValue;
        widget = document.querySelector('.widget');
        if ( inputValue === '') {
            return;
        } else {
            widget.remove();
        }
        getCityName(cityName);
    });
}



//Get weather forecast
function forecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131`)
    .then(function(response){
        return response.json();
    })
        .then(function(data){
            console.log(data);
        })
}
forecast(cityName);



// Get city name & response function
function getCityName(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131&lang`)
        .then(function (response){
           return response.json();
        })
        .then(function(data){
            console.log(data);
            renderHtml(data);
           /* fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131`)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                })*/
        })
}
getCityName(cityName);




/*
function getCityName(cityName) {
    // Server request
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131&lang`);
    request.send();
    request.addEventListener('load', ()=>{
        console.log(request.responseText);
        let data = JSON.parse(request.responseText);
        console.log(data);
        renderHtml(data);
    });
}
getCityName(cityName);*/
