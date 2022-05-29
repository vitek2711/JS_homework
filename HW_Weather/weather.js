'use strict'

// Variables
let btn;
let input;
let error = 'error';
let inputValue;
let cityName = 'Могилёв';
let body = document.querySelector('body');
// let forecast = document.querySelector('.forecast');
let widget;
let iconCode;
let humidity;
let currentTemperature;
let weatherDescription;
let currentCityName;
let windSpeed;

//Render HTML function
function renderHtml(forecastObj, forecastList) {
    iconCode = forecastObj?.weather[0]?.icon;
    humidity = forecastObj?.main?.humidity;
    currentTemperature = Math.round(forecastObj?.main.temp - 273);
    weatherDescription = forecastObj?.weather[0]?.description;
    currentCityName = forecastObj?.name;
    windSpeed = Math.round(forecastObj?.wind?.speed);

    //html code
    let html = `
    <div class="widget">
        <p class="now">The weather is now</p>
        <!--Weather picture-->
        <div class="weather-icon">
            <img src="./img/${iconCode}.svg" alt="icon">
        </div>
        <!--Weather description-->
        <div class="weather-description">${weatherDescription}</div>
        <div class="city-name">${currentCityName}</div>
        <div class="items">
            <!--Curent wind speed-->
            <div class="part">
                <p class="param">Wind</p>
                <img class="wind-img" src="./img/tornado.svg" alt="wind">
                <p class="text-part">${windSpeed} m/s</p>
            </div>
            <p class="temperature">${currentTemperature}&deg;</p>
            <!-- Current Humidity-->
            <div class="part">
                <p class="param">Humidity</p>
                <img class="humidity-img" src="./img/wet.png" alt="humidity-img">
                <p class="text-part">${humidity} %</p>
            </div>
        </div>
       
    <!-- Weather forecast -->
        <p class="now">forecast for three days</p>
 <div class="forecast">
            <div class="forecast-block">
                <p class="param">day</p>
                <img class="night-img" src="./img/01d.svg" alt="tonight picture">
                <p class="forecast-temp"></p>
            </div>
            <div class="forecast-block">
                <p class="param">day</p>
                <img class="daytime-img" src="./img/02n.svg" alt="daytime picture">
                <p class="forecast-temp">deg</p>
            </div>
            <div class="forecast-block">
                <p class="param">day</p>
                <img class="daytime-img" src="./img/03n.svg" alt="daytime picture">
                <p class="forecast-temp">deg</p>
            </div>
        </div>
        <!--input-->
        <div class="getcity">
            <input form="btn" placeholder="Enter the name of the city" class="city-input" type="text" size="30" value="" id="inputValue">
            <button id="btn" class="btn" id="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
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
    btn.addEventListener('click', () => {
        // Get input value
        inputValue = document.getElementById('inputValue').value;
        cityName = inputValue;
        widget = document.querySelector('.widget');
        if (inputValue === '') {
            return;
        } else {
            widget.remove();
        }
        getCityName(cityName);
        getForecast(cityName);
    });
}


// Get city name & response function
function getCityName(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131&lang`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderHtml(data);
        })
}
getCityName(cityName);


//Get weather forecast
function getForecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=25&appid=6a7a4d30f99d918e2254ddc1a283a131`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let date = 8;
            data.list = data.list.filter((item, index) => {
                if (index > date) date += 8;
                return index!==0 && index % date === 0;
            });
            let dates = data.list.map((item,index) => item.dt_txt.split(' ')[0]);
            // renderForecast(data);
            console.log(data.list,'---------');
            // console.log(dates);
            renderHtml(data.list);
        })
}
getForecast(cityName);

/*// Render weather list
function renderForecast(forecastList){
    let forecastHtml = `
    <!--Weather forecast-->
                <div class="forecast-block">
                    <p class="param">00:00</p>
                    <img class="night-img" src="./img/01d.svg" alt="tonight picture">
                    <p class="forecast-temp">${Math.round( forecastList)}</p>
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
   `
    body.insertAdjacentHTML('beforebegin', forecastHtml);
}*/