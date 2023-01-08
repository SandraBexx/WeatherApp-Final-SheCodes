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
