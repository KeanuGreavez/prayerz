function getPrayerTimesByCity() {
fetch("https://api.aladhan.com/v1/timingsByCity?city=Middleton&country=UK&method=2")
.then(response => response.json())
.then(data => {
    let t = data.data.timings;
    document.getElementById("fajr").innerText = t.Fajr;
    document.getElementById("dhuhr").innerText = t.Dhuhr;
    document.getElementById("asr").innerText = t.Asr;
    document.getElementById("maghrib").innerText = t.Maghrib;
    document.getElementById("isha").innerText = t.Isha;
});
}

getPrayerTimesByCity();
