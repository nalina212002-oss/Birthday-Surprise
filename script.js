let pin = "";
const correctPin = "2404";

function press(number) {
    if (pin.length < 4) {
        pin += number;
        updateDisplay();

        if (pin.length === 4) {
            setTimeout(checkPin, 300);
        }
    }
}

function updateDisplay() {
    let dots = "";

    for (let i = 0; i < pin.length; i++) {
        dots += "● ";
    }

    for (let i = pin.length; i < 4; i++) {
        dots += "○ ";
    }

    document.getElementById("pinDisplay").innerHTML = dots;
}

function removeDigit() {
    pin = pin.slice(0, -1);
    updateDisplay();
}

function clearPin() {
    pin = "";
    updateDisplay();
}

function checkPin() {

    if (pin === correctPin) {

        window.location.href = "celebration.html";

    } else {

        window.location.href = "wrong.html";

    }

}
function goBack(){

window.location.href="index.html";

}
function updateClock(){

const now=new Date();

let hour=now.getHours();

let minute=now.getMinutes();

if(hour<10) hour="0"+hour;

if(minute<10) minute="0"+minute;

document.getElementById("time").innerHTML=hour+":"+minute;

const options={

weekday:'long',

day:'numeric',

month:'long'

};

document.getElementById("date").innerHTML=

now.toLocaleDateString('en-US',options);

}

setInterval(updateClock,1000);

updateClock();