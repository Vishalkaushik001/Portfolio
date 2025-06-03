function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`http://127.0.0.1:5000/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }
            document.getElementById("location").innerText = data.location;
            document.getElementById("temperature").innerText = data.temperature;
            document.getElementById("condition").innerText = data.condition;
            document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.icon}.png`;
            document.getElementById("weatherInfo").classList.remove("hidden");
        })
        .catch(error => console.error("Error fetching data:", error));
}
