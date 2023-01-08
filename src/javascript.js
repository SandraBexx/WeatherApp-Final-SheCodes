function displayWeatherData(response) {
  console.log(response);
  let cityElement = document.querySelector("#searchedCity");
  cityElement.innerHTML = response.data.city;
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let rainElement = document.querySelector("#rainPossibility");
  rainElement.innerHTML = Math.round(response.data.temperature.humidity);
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let city = "Lisbon";
let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeatherData);
