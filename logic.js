
// getting element of clock
let ch = document.getElementById("chours");
let cm = document.getElementById("cminutes");
let cs = document.getElementById("cseconds");

//getting element of timer
let th = document.getElementById("hours");
let tm = document.getElementById("minutes");
let ts = document.getElementById("seconds");


//getting buttons of timer
let tstart = document.getElementById("start");
let tstop = document.getElementById("tstop");
let treset = document.getElementById("reset");

//getting element of countdown
let ah = document.getElementById("ahours");
let am = document.getElementById("aminutes");
let as = document.getElementById("aseconds");

//getting buttons of countdown
let set = document.getElementById("set");
let stop = document.getElementById("stop");




// showing clock time
setInterval(() => {
    const currentDate = new Date();

    ch.innerHTML = currentDate.getHours();
    cm.innerHTML = currentDate.getMinutes();
    cs.innerHTML = currentDate.getSeconds();

}, 1000)

// timer functionality
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId = null;

tstop.addEventListener("click", () => {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
});

treset.addEventListener("click", () => {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    seconds = 0;
    minutes = 0;
    hours = 0;
    ts.innerHTML = String(seconds).padStart(2, "0");
    tm.innerHTML = String(minutes).padStart(2, "0");
    th.innerHTML = String(hours).padStart(2, "0");
});

tstart.addEventListener("click", () => {
    if (timerId !== null) return; // prevents multiple starts

    timerId = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        ts.innerHTML = String(seconds).padStart(2, "0");
        tm.innerHTML = String(minutes).padStart(2, "0");
        th.innerHTML = String(hours).padStart(2, "0");
    }, 1000);
});



//logic for alarm
const music = new Audio("music.mp3");
music.loop = true;



set.addEventListener("click", () => {

    ah.innerHTML = parseInt(prompt("Enter hours"));
    am.innerHTML = parseInt(prompt("Enter minutes"));
    as.innerHTML = parseInt(prompt("Enter seconds"));

    alarmOn = true;
});

// CHECK EVERY SECOND
setInterval(() => {
    if (
        alarmOn &&
        parseInt(ah.innerHTML) == parseInt(ch.innerHTML) &&
        parseInt(am.innerHTML) == parseInt(cm.innerHTML) &&
        parseInt(as.innerHTML) == parseInt(cs.innerHTML)
    ) {
        music.currentTime = 0;
        music.play();
        alarmOn = false; // prevent repeat
    }
}, 1000);

stop.addEventListener("click", () => {
    music.pause();
    music.currentTime = 0;
});






