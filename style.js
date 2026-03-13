// Ask user to click a button first to allow location (required on some phones)
function requestPrayerTimes() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`)
            .then(response => response.json())
            .then(data => {
                let t = data.data.timings;

                document.getElementById("fajr").innerText = t.Fajr;
                document.getElementById("dhuhr").innerText = t.Dhuhr;
                document.getElementById("asr").innerText = t.Asr;
                document.getElementById("maghrib").innerText = t.Maghrib;
                document.getElementById("isha").innerText = t.Isha;
            })
            .catch(err => {
                console.error(err);
                alert("Failed to fetch prayer times");
            });
        },
        (err) => {
            alert("Please allow location access to see prayer times");
        }
    );
}
