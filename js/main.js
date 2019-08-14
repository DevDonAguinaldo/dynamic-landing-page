// DOM Elements
const time     = document.getElementById('time'),
      name     = document.getElementById('name'),
      greeting = document.getElementById('greeting'),
      focus    = document.getElementById('focus'),
      mdy      = document.getElementById('monthdayyear');

function showTime() {
    let today = new Date(),
        hour  = today.getHours(),
        min   = today.getMinutes(),
        sec   = today.getSeconds();

    const ampm = hour < 12 ? 'AM' : 'PM';

    hour = hour % 12 || 12;
    
    time.innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${ampm}`;

    setTimeout(showTime, 1000);
}

function addzero(num) { return (parseInt(num, 10) < 10 ? '0' : '') + num; }

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(event) {
    if(event.type === 'keypress') {
        if(event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('name', event.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText) + '!';
    }
}

function getFocus() {
    if(localStorage.getItem('focus') === null) { 
        focus.textContent = '[Enter Focus]'; 
    } else { 
        focus.textContent = localStorage.getItem('focus'); 
    }
}

function setFocus(event) {
    if(event.type === 'keypress') {
        if(event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('focus', event.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// RUN
function run() {
    showTime();
    getName();
    getFocus();
}

run();
