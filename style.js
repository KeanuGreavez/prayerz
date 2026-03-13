function getPrayerTimes(lat, lon){

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`)
.then(response => response.json())
.then(data => {

let times = data.data.timings;

document.getElementById("fajr").innerText = times.Fajr;
document.getElementById("dhuhr").innerText = times.Dhuhr;
document.getElementById("asr").innerText = times.Asr;
document.getElementById("maghrib").innerText = times.Maghrib;
document.getElementById("isha").innerText = times.Isha;

});

}

navigator.geolocation.getCurrentPosition(position => {

let lat = position.coords.latitude;
let lon = position.coords.longitude;

getPrayerTimes(lat, lon);

});
