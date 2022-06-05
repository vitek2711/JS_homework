'use strict'
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
    <!-- start weather section -->
    <div class="weather">
        <i class="fa-solid fa-umbrella"></i>
    </div>
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











