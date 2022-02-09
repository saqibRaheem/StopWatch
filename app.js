

var msecHeading= document.getElementById("milsec")
var secHeading= document.getElementById("sec")
var minHeading= document.getElementById("min")
var hourHeading= document.getElementById("hour")
var startBtn= document.getElementById("start-btn")
var onDiv = document.getElementById("on")
var msec = 00;
var sec = 00;
var min = 00;
var hour = 00;
var interval;

function Timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec == "100"){
        sec++
        secHeading.innerHTML = ":"+sec
        msec = 00
    }
    if(sec == "60"){
        min++
        minHeading.innerHTML = ":"+min
        sec = 00
    }
    if(min == "60"){
        hour++
        hourHeading.innerHTML = hour
        min= 00
    }
    
}


function start() {
    startBtn.classList = " fa fa-pause";
    console.log(startBtn.classList );
    startBtn.onclick = pause;
    interval = setInterval(Timer, 10);
    var on = document.getElementById("on")
    on.className= "square"
    
}

function pause() {
    startBtn.classList = " fa fa-play-circle";
    console.log(startBtn.classList);
    startBtn.onclick = start;
    clearInterval(interval);
    var on = document.getElementById("on")
    on.className= "pause"
   
}
function reStart(){
 msec = 00;
 sec = 00;
 min = 00;
 hour = 00;
 msecHeading.innerHTML = "00";
   secHeading.innerHTML = ":00";
   minHeading.innerHTML = ":00";
   hourHeading.innerHTML = "00";
   clearInterval(interval)     
   var on = document.getElementById("on")
    on.className= "pause"
    startBtn.classList = " fa fa-play-circle";
    console.log(startBtn.classList);
    startBtn.onclick = start;
}
