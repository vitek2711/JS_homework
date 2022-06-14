'use strict'
// CALENDAR SECTION //

/// variables ///
let btn;
let input;
let error = 'error';
let inputValue;
let cityName = 'Munich';
let weatherWrapper;
let iconImg;
let humidity;
let weekend;
let currentTemperature;
let weatherDescription;
let currentCityName;
let windSpeed;
let body = document.querySelector('body');
let mainCityData;
let fourDays=[];
let visibleData;

// option params
const option = {
    timeZone: 'Europe/Minsk',
    month: 'long',
    year: 'numeric',
}

//get current date
let currentDateInfo = new Date();
let currentMonth = currentDateInfo.getMonth();
let currentYear = currentDateInfo.getFullYear();

// get current date info
let dateInfo = currentDateInfo.toLocaleString('en-EN', option);
console.log(dateInfo);

//render HTML function
function renderHtml(visibleData, city) {
    currentCityName = visibleData?.name;
    windSpeed = Math.round(visibleData?.wind?.speed);
    humidity = visibleData?.main?.humidity;
    currentTemperature = Math.round(visibleData?.main.temp - 273);
    weatherDescription = visibleData?.weather[0]?.description;
    document.querySelector('.info-block');
    //HTML-code
    let html = `
     <!-- title -->
    <h1>Colourful Calendar & Weather Forecast</h1>
    <h2>This calendar and weather forecast created by HTML, CSS, JavaScript</h2>
    <!-- start calendar section -->
    <div class="calendar-wrapper">
        <div class="info-block">
            <div id="arrowLeft" >
                <i class="fa-solid fa-arrow-left"></i>
            </div>
                 <!-- month & year -->
                 <p id='info' class="info"></p>
            <div id="arrowRight">
                <i  class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="cell-block">
            <!-- days names-->
            <div class="cell dayname">mon</div>
            <div class="cell dayname">tue</div>
            <div class="cell dayname">wed</div>
            <div class="cell dayname">thu</div>
            <div class="cell dayname">fri</div>
            <div class="cell dayname weekend">sat</div>
            <div class="cell dayname weekend">sun</div>
            <!-- days numbers -->
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
    
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day"></div>
            <div class="cell day weekend"></div>
            <div class="cell day weekend"></div>
        </div>
    </div>
    <!-- start weather section -->
    <div class="weather-wrapper">
        <div id="umbrella">
            <i  class="fa-solid fa-umbrella"></i>
        </div>
        <div class="btn-close">CLOSE</div>
        <p class="now">The weather is now</p>
        <div class="weather">
            <!--Weather picture-->
            <div class="weather-icon">
               
            </div>
            <!--Weather description-->
                <div class="weather-description">${weatherDescription}</div>
                <div class="city-name">${currentCityName}</div>
            <div class="items">
                <!--Current wind speed-->
                <div class="part">
                    <p class="param">Wind</p>
                    <img class="wind-img" src="./img/tornado.svg" alt="wind">
                    <p id="windspeed" class="text-part">${windSpeed}</p>
                </div>
                <p class="temperature">${currentTemperature}</p>
                <!-- Current Humidity-->
                <div class="part">
                    <p class="param">Humidity</p>
                    <img class="humidity-img" src="./img/wet.png" alt="humidity-img">
                    <p id="humidity" class="text-part">${humidity}</p>
                </div>
            </div>
            <!--get city input-->
            <div class="getcity">
                <input form="btn" placeholder="Enter the name of the city" class="city-input" type="text" size="30" value="" id="inputValue">
                <button id="btn" class="btn" id="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>  
        </div>  
    </div>
`;
    body.insertAdjacentHTML('afterbegin', html);
    getOtherCity();
    addArrowHandlers();
    setEvents();

    //checking if there is a city in localstorage
    (async function () {
        if(localStorage.hasOwnProperty('storageCity')){
            await getCityName(localStorage.getItem('storageCity'));
        }
        else {
            await getCityName();
        }
    })();
}
renderHtml();
getDateOfCalendar();

// remove temporary classes
function removeTempClasses() {
    let cDay = document.querySelector('.current-day');
    if (cDay) {
        cDay.classList.remove('current-day');
    }
    let allmonthcells = document.querySelectorAll('.allmonthcell');
    allmonthcells.forEach(item=>item.classList.remove('allmonthcell'));
}

/// get dates in cells
function getDateOfCalendar() {
    weekend = document.querySelector('.weekend');
    const tempDate = new Date(currentDateInfo);
    tempDate.setDate(1);
    let monthNow = tempDate.getMonth();
    let startDate = getDate(tempDate);
    //get date numbers
    let cells = document.querySelectorAll('.day');
    cells.forEach(cell => {
        if (startDate.getMonth() === (new Date()).getMonth() && startDate.getFullYear() === (new Date()).getFullYear()) {
            if (startDate.getDate() === (new Date()).getDate()) {
                cell.classList.add('current-day');
            }
        }
        if(monthNow===startDate.getMonth()){
            cell.classList.add('allmonthcell');
        }
        cell.dataset.date = `${startDate.getDate()}-${startDate.getMonth()+1}-${startDate.getFullYear()}}`
        cell.innerText = startDate.getDate();
        startDate.setDate(tempDate.getDate() + 1);
    });
}

// get date
function getDate(myDate) {
    let day = myDate.getDay();
    if (myDate.getDay() === 0) {
        myDate.setDate(myDate.getDate() - 6);
        return myDate;
    }
    myDate.setDate(myDate.getDate() - day + 1);
    return myDate;
}

// arrow handlers
function addArrowHandlers() {
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    arrowLeft.addEventListener('click', (e) => {
        removeTempClasses();
        changeMonth(-1);
        if (currentMonth < 0) {
            currentYear -= 1;
        }
    })
    arrowRight.addEventListener('click', (e) => {
        removeTempClasses();
        changeMonth(1);
        if (currentMonth > 11) {
            currentYear += 1;
        }
    })
}

// change month
function changeMonth(month = 0) {
    currentMonth = currentDateInfo.setMonth(currentDateInfo.getMonth() + month);
    getDateOfCalendar();
    clearInfo();
    switchMonthAndYear();
}

let info = document.getElementById('info');

//switch month and year
function switchMonthAndYear() {
    info.innerText = `${currentDateInfo.toLocaleString('en-EN', option)}`;
}
switchMonthAndYear();

//clear info field
function clearInfo() {
    info.innerText = '';
}

// THE WEATHER SECTION //

function setEvents(){
    // view the forecast of current day by click
    let weatherWrapper = document.querySelector('.weather-wrapper');
    document.querySelector('#umbrella').addEventListener('click', () => {
        weatherWrapper.classList.remove('passive');
        weatherWrapper.classList.add('active','close');
        document.querySelector('#umbrella').style.display = 'none';
        weatherWrapper.style.display = 'block';
        document.querySelector('.btn-close').style.display = 'block';
    });

    //close the forecast of current day by click
    document.querySelector('.btn-close').addEventListener('click', ()=>{
        weatherWrapper.classList.add('passive');
        document.querySelector('.btn-close').style.display = 'none';
        document.querySelector('#umbrella').style.display = 'block';
        weatherWrapper.classList.remove('active','close');
    });
}

// Get other city function
function getOtherCity(city) {
    document.getElementsByTagName('input');
    btn = document.getElementById('btn');
    //onclick event
    btn.addEventListener('click', () => {
        inputValue = document.getElementById('inputValue').value;
        cityName = inputValue;
        weatherWrapper = document.querySelector('.weather-wrapper');
        (async function (){
            getCityName(cityName);
            incorrectValue();
        })();
    });
    (async function() {
        document.querySelector('input').addEventListener('keydown', function(e) {
            // keydown event
            inputValue = document.getElementById('inputValue').value;
            cityName = inputValue;
            weatherWrapper = document.querySelector('.weather-wrapper');
            if (e.keyCode === 13) {
                (async function (){
                    getCityName(cityName);
                    incorrectValue();
                })();
            }
        });
    })();

    // if incorrect value entered
    function incorrectValue() {
        if (inputValue === '') {
            alert('You did not enter the name of the city');
        }
    }
}

// Get city name & response function
async function getCityName(cityName = 'Munich') {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131&lang`);
    mainCityData = await response.json();
    console.log(mainCityData)
    response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=6a7a4d30f99d918e2254ddc1a283a131`);
    let otherCityData = await response.json();
    fourDays = otherCityData.list.filter((item, index) => {
        return index!==0 && index % 8 === 0;
    });
    console.log(fourDays);

    visibleData = {
        name: mainCityData.name,
        temp: mainCityData?.main?.temp,
        wind: mainCityData?.wind.speed,
        humidity: mainCityData?.main?.humidity,
        desc: mainCityData?.weather[0]?.description,
        icon: mainCityData?.weather[0]?.icon,
    }
    updateWeather(visibleData);

    //add city to localstorage
    localStorage.removeItem('storageCity');
    localStorage.setItem('storageCity', cityName);
}

//update weather
function updateWeather(data) {
    let cityNameBlok = document.querySelector('.city-name');
    let currentTemperature = document.querySelector('.temperature');
    let currentHumidity = document.querySelector('#humidity');
    let currentWindspeed = document.querySelector('#windspeed');
    let weatherDescription = document.querySelector('.weather-description');
    let weatherIcon = document.querySelector('.weather-icon');
    iconImg = mainCityData?.weather[0]?.icon;

    currentTemperature.innerHTML = Math.round(data.temp-273) + `&deg;`;
    cityNameBlok.innerHTML = data.name;
    currentHumidity.innerHTML = data.humidity + '%';
    currentWindspeed.innerHTML = Math.round(data.wind) + ` ` + `m/s`;
    weatherDescription.innerHTML = data.desc;

    //add weather icon function and clear icon function
    function  addWeatherIcon() {
        clear();
        //add weather icon
        weatherIcon.insertAdjacentHTML("beforeend", `
            <img id="iconPicture" src="./img/${iconImg}.svg" alt="icon">
        `);
        //clear the field of icon function
        function clear() {
            document.querySelector('.weather-icon').innerHTML = '';
        }
    }
    addWeatherIcon();
}
/*/!**
 * Создает объект для обновления погоды
 * @param myData Входные данные
 * @param isDateArr входное значение является ли массивом
 * @param ind индекс элемента массива по умолчанию
 *!/
function generateWeatherObject(myData, isDateArr=false, ind = 0) {
    if(!myData) return;
    if(isDateArr && !myData.length) return;

    let data = null;
    if(isDateArr){
        data = {
            city: cityName,
            temp: myData[ind].temp,

        }
    }
    else {
        data = {
            city: myData.name,
            temp: myData.main.temp,

        }
    }
    updateWeather(data);
}*/







