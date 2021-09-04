var currentDayEl = document.querySelector('#currentDay');
var currentTimeEl = document.querySelector('#currentTime');
var nineEl = document.querySelector('#nine-am');
var tenEl = document.querySelector('#ten-am');
var elevenEl = document.querySelector('#eleven-am');
var twelveEl = document.querySelector('#twelve-pm');
var oneEl = document.querySelector('#one-pm');
var twoEl = document.querySelector('#two-pm');
var threeEl = document.querySelector('#three-pm');
var fourEl = document.querySelector('#four-pm');
var fiveEl = document.querySelector('#five-pm');

var currentTime = setInterval(Time, 1000);
var button9 = document.querySelector('.saveBtn9');
var button10 = document.querySelector('.saveBtn10');
var button11 = document.querySelector('.saveBtn11');
var button12 = document.querySelector('.saveBtn12');
var button1 = document.querySelector('.saveBtn1');
var button2 = document.querySelector('.saveBtn2');
var button3 = document.querySelector('.saveBtn3');
var button4 = document.querySelector('.saveBtn4');
var button5 = document.querySelector('.saveBtn5');

function Time() {
    var now = new Date();

    currentDayEl.innerText = moment(now).format('dddd, LL');
    currentTimeEl.innerText = moment(now).format(' hh : mm : ss a');
    
    var time = moment();

    nineAm(time);
    tenAm(time);
    elevenAm(time);
    twelvePm(time);
    onePm(time);
    twoPm(time);
    threePm(time);
    fourPm(time);
    fivePm(time);
}

button9.addEventListener('click', function() {
    var text = nineEl.value;
    localStorage.setItem("hour9", JSON.stringify(text));
})

button10.addEventListener('click', function() {
    var text = tenEl.value;
    localStorage.setItem("hour10", JSON.stringify(text));
})

button11.addEventListener('click', function() {
    var text = elevenEl.value;
    localStorage.setItem("hour11", JSON.stringify(text));
})

button12.addEventListener('click', function() {
    var text = twelveEl.value;
    localStorage.setItem("hour12", JSON.stringify(text));
})

button1.addEventListener('click', function() {
    var text = oneEl.value;
    localStorage.setItem("hour1", JSON.stringify(text));
})

button2.addEventListener('click', function() {
    var text = twoEl.value;
    localStorage.setItem("hour2", JSON.stringify(text));
})

button3.addEventListener('click', function() {
    var text = threeEl.value;
    localStorage.setItem("hour3", JSON.stringify(text));
})

button4.addEventListener('click', function() {
    var text = fourEl.value;
    localStorage.setItem("hour4", JSON.stringify(text));
})

button5.addEventListener('click', function() {
    var text = fiveEl.value;
    localStorage.setItem("hour5", JSON.stringify(text));
})

function nineAm (time) {
    nineEl.textContent = JSON.parse(localStorage.getItem("hour9"));

    if (time.hour() < 9) {
        nineEl.classList.remove('past');
        nineEl.classList.add('future');
    } else if (time.hour() >= 9 && time.hour() < 10){
        nineEl.classList.remove('future');
        nineEl.classList.add('present');
    } else {
        nineEl.classList.remove('present');
        nineEl.classList.add('past');
    }
}

function tenAm (time) {
    tenEl.textContent = JSON.parse(localStorage.getItem("hour10"));

    if (time.hour() < 10) {
        tenEl.classList.remove('past');
        tenEl.classList.add('future');
    } else if (time.hour() >= 10 && time.hour() < 11){
        tenEl.classList.remove('future');
        tenEl.classList.add('present');
    } else {
        tenEl.classList.remove('present');
        tenEl.classList.add('past');
    }
}

function elevenAm (time) {
    elevenEl.textContent = JSON.parse(localStorage.getItem("hour11"));

    if (time.hour() < 11) {
        elevenEl.classList.remove('past');
        elevenEl.classList.add('future');
    } else if (time.hour() >= 11 && time.hour() < 12){
        elevenEl.classList.remove('future');
        elevenEl.classList.add('present');
    } else {
        elevenEl.classList.remove('present');
        elevenEl.classList.add('past');
    }
}

function twelvePm (time) {
    twelveEl.textContent = JSON.parse(localStorage.getItem("hour12"));

    if (time.hour() < 12) {
        twelveEl.classList.remove('past');
        twelveEl.classList.add('future');
    } else if (time.hour() >= 12 && time.hour() < 13){
        twelveEl.classList.remove('future');
        twelveEl.classList.add('present');
    } else {
        twelveEl.classList.remove('present');
        twelveEl.classList.add('past');
    }
}

function onePm (time) {
    oneEl.textContent = JSON.parse(localStorage.getItem("hour1"));

    if (time.hour() < 13) {
        oneEl.classList.remove('past');
        oneEl.classList.add('future');
    } else if (time.hour() >= 13 && time.hour() < 14){
        oneEl.classList.remove('future');
        oneEl.classList.add('present');
    } else {
        oneEl.classList.remove('present');
        oneEl.classList.add('past');
    }
}

function twoPm (time) {
    twoEl.textContent = JSON.parse(localStorage.getItem("hour2"));

    if (time.hour() < 14) {
        twoEl.classList.remove('past');
        twoEl.classList.add('future');
    } else if (time.hour() >= 14 && time.hour() < 15){
        twoEl.classList.remove('future');
        twoEl.classList.add('present');
    } else {
        twoEl.classList.remove('present');
        twoEl.classList.add('past');
    }
}

function threePm (time) {
    threeEl.textContent = JSON.parse(localStorage.getItem("hour3"));

    if (time.hour() < 15) {
        threeEl.classList.remove('past');
        threeEl.classList.add('future');
    } else if (time.hour() >= 15 && time.hour() < 16){
        threeEl.classList.remove('future');
        threeEl.classList.add('present');
    } else {
        threeEl.classList.remove('present');
        threeEl.classList.add('past');
    }
}

function fourPm (time) {
    fourEl.textContent = JSON.parse(localStorage.getItem("hour4"));

    if (time.hour() < 16) {
        fourEl.classList.remove('past');
        fourEl.classList.add('future');
    } else if (time.hour() >= 16 && time.hour() < 17){
        fourEl.classList.remove('future');
        fourEl.classList.add('present');
    } else {
        fourEl.classList.remove('present');
        fourEl.classList.add('past');
    }
}

function fivePm (time) {
    fiveEl.textContent = JSON.parse(localStorage.getItem("hour5"));

    if (time.hour() < 17) {
        fiveEl.classList.remove('past');
        fiveEl.classList.add('future');
    } else if (time.hour() >= 17 && time.hour() < 18){
        fiveEl.classList.remove('future');
        fiveEl.classList.add('present');
    } else {
        fiveEl.classList.remove('present');
        fiveEl.classList.add('past');
    }
}