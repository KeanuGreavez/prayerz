let prayerTimes = {};

async function loadTimes() {

let response = await fetch("https://api.aladhan.com/v1/timingsByCity?city=London&country=UK");
let data = await response.json();

prayerTimes = data.data.timings;

}

function showTime(prayer){

document.getElementById("result").innerText =
prayer + " time: " + prayerTimes[prayer];

}

loadTimes();
