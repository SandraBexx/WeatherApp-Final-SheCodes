let date = new Date();

console.log(date);

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
  console.log(response);
  let cityElement = document.querySelector("#searchedCity");
  let temperatureElement = document.querySelector("#currentTemperature");
  let descriptionElement = document.querySelector("#description");
  let rainElement = document.querySelector("#rainPossibility");
  let windElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#weatherIcon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
