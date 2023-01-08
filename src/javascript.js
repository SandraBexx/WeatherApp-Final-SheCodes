let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[date.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();

let dateOfTheDay = document.querySelector("#currentDate");
dateOfTheDay.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}th`;

function displayWeatherData(response) {
  let cityElement = document.querySelector("#searchedCity");
  let temperatureElement = document.querySelector("#currentTemperature");
  let descriptionElement = document.querySelector("#description");
  let rainElement = document.querySelector("#rainPossibility");
  let windElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#weatherIcon");

  celsiusTemperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = celsiusTemperature;
  descriptionElement.innerHTML = response.data.condition.description;
  rainElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

function search(city) {
  let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherData);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#currentTemperature");
  let showFahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(showFahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = celsiusTemperature;
}

function getCoordinates(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWeatherData);
}

function displayCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCoordinates);
}

let celsiusTemperature = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitUnit = document.querySelector("#fahrenheitLink");
fahrenheitUnit.addEventListener("click", displayFahrenheitTemperature);

let celsiusUnit = document.querySelector("#celsiusLink");
celsiusUnit.addEventListener("click", displayCelsiusTemperature);

let currentLocation = document.querySelector("#locationButton");
currentLocation.addEventListener("click", displayCurrentLocation);

search("Madrid");
