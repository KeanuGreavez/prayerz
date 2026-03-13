function getPrayerTimes(lat, lon){

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`)
.then(res => res.json())
.then(data => {

let t = data.data.timings;

document.getElementById("fajr").innerText = t.Fajr;
document.getElementById("dhuhr").innerText = t.Dhuhr;
document.getElementById("asr").innerText = t.Asr;
document.getElementById("maghrib").innerText = t.Maghrib;
document.getElementById("isha").innerText = t.Isha;

});

}

navigator.geolocation.getCurrentPosition(pos => {

getPrayerTimes(pos.coords.latitude, pos.coords.longitude);

});
