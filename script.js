function updateClock(){

const now = new Date();

const time =
now.toLocaleTimeString();

const date =
now.toDateString();

document.getElementById("clock").innerHTML = time;
document.getElementById("date").innerHTML = date;
}

setInterval(updateClock,1000);
updateClock();

let startTime;
let elapsed = 0;
let timerInterval;

function startStop(){

startTime = Date.now() - elapsed;

timerInterval = setInterval(() => {

elapsed = Date.now() - startTime;

let ms = elapsed % 1000;
let sec = Math.floor(elapsed/1000)%60;
let min = Math.floor(elapsed/60000)%60;
let hr = Math.floor(elapsed/3600000);

document.getElementById("display").innerHTML =
`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${String(ms).padStart(3,'0')}`;

},10);
}

function pauseStop(){
clearInterval(timerInterval);
}

function resetStop(){

clearInterval(timerInterval);

elapsed = 0;

document.getElementById("display").innerHTML =
"00:00:00.000";

document.getElementById("laps").innerHTML = "";
}

function lapTime(){

const li = document.createElement("li");

li.textContent =
document.getElementById("display").textContent;

document.getElementById("laps").appendChild(li);
}