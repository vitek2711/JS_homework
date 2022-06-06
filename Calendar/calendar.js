'use strict'
// CALENDAR SECTION //

/// variables ///
let body = document.querySelector('body');

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
function renderHml() {
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
        <i id="umbrella" class="fa-solid fa-umbrella"></i>
        <div class="close">CLOSE</div>
        <p class="now">The weather is now</p>
        <div class="weather">
            <!--Weather picture-->
            <div class="weather-icon">
                <img src="./img/03n.svg" alt="icon">
            </div>
            <!--Weather description-->
                <div class="weather-description">Rain</div>
                <div class="city-name">Могилёв</div>
            <div class="items">
                <!--Current wind speed-->
                <div class="part">
                    <p class="param">Wind</p>
                    <img class="wind-img" src="./img/tornado.svg" alt="wind">
                    <p class="text-part"> 12 m/s</p>
                </div>
                <p class="temperature">12&deg;</p>
                <!-- Current Humidity-->
                <div class="part">
                    <p class="param">Humidity</p>
                    <img class="humidity-img" src="./img/wet.png" alt="humidity-img">
                    <p class="text-part">60 &#37;</p>
                </div>
            </div>
            <!--get city input-->
            <div class="getcity">
                <input form="btn" placeholder="Enter the name of the city" class="city-input" type="text" size="30" value="" id="inputValue">
                <button id="btn" class="btn" id="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>  
        </div>  
    </div>
`
    body.insertAdjacentHTML('afterbegin', html);
    addArrowHandlers();
}

renderHml();
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

// WEATHER SECTION //

// view the forecast of current day on click
function vievForecastblock() {
    document.querySelector('#umbrella').addEventListener('click', () => {
        document.querySelector('.weather-wrapper').classList.add('active');
        document.querySelector('#umbrella').style.display = 'none';
        document.querySelector('.weather-wrapper').classList.add('.close');
        document.querySelector('.close').style.display = 'block';
    })
    document.querySelector('.close').addEventListener('click', ()=>{
        document.querySelector('.weather-wrapper').classList.add('passive');
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.fa-umbrella').style.display = 'block';
    })
}
vievForecastblock();

/*
// close the forecast of current day on click
function closeForecastblock() {
    document.querySelector('.close').addEventListener('click', ()=>{
        document.querySelector('.weather-wrapper').classList.add('passive');
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.fa-umbrella').style.display = 'block';
    })
}
closeForecastblock();
*/









