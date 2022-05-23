'use strict'

// Variables
let btn;
let inputValue;
let cityName = 'Могилёв';
let body = document.querySelector('body');
/*let weatherIcon = document.querySelector('.weather-icon');*/
// let weatherIconUrl = `http://openweathermap.org/img/wn/${iconCode}`;
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
                <p>Wind</p>
                <img class="wind-img" src="./img/tornado.svg" alt="wind">
                <p class="text-part windspeed">${forecastObj?.wind?.speed}m/s</p>
            </div>
            <p class="temperature">${Math.round(forecastObj?.main?.temp-273) +'&deg;'}</p>
            <!-- Current Humidity-->
            <div class="part">
                <p>Humidity</p>
                <img class="humidity-img" src="./img/wet.png" alt="humidity-img">
                <p class="text-part humidity">${forecastObj?.main?.humidity}%</p>
            </div>
        </div>
<!--Weather forecast-->
<!--<div class="line"></div>
 <div class="forecast">
            <div class="forecast-block">
                <p class="descr">24:00</p>
                <img class="night-img" src="./img/angry_clouds.svg" alt="tonight picture">
                <p class="forecast-temp">+4</p>
            </div>
            <div class="forecast-block">
                <p class="descr">12:00</p>
                <img class="daytime-img" src="./img/day_rain.svg" alt="daytime picture">
                <p class="forecast-temp">+13</p>
            </div>
            <div class="forecast-block">
                <p class="descr">07:00</p>
                <img class="daytime-img" src="./img/day_clear.svg" alt="daytime picture">
                <p class="forecast-temp">+10</p>
            </div>
        </div>
        <div class="line"></div>-->
        <!--input-->
        <input placeholder="Enter the name of the city" class="city-input" type="text" size="30" value="" id="inputValue">
        <button class="btn" id="btn">Get</button>
    </div>`;
    // insert HTML code
       body.insertAdjacentHTML('afterbegin', html);

    getOtherCity();
    getWeatherIcon();
}

//get weather icon function
async function getWeatherIcon() {
    if (Object.weather === 'light rain') {
        let lightRain = '<img src="./img/>';
        weatherIcon.insertAdjacentHTML('afterbegin', lightRain);
    }
}

// Get other city function
function getOtherCity() {
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

// Get city name function
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
getCityName(cityName);

// Get forecast function
function getForecast() {

}

/*//Получаем прогноз в массив data
fetch('http://api.openweathermap.org/data/2.5/weather?id=ID_ВАШЕГО_ГОРОДА&lang=ru&appid=ВАШ_API_КЛЮЧ').then(function (resp) {return resp.json() }).then(function (data) {
    //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
    .catch(function () {
        //Обрабатываем ошибки
    });*/
