function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#currentTemperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let city = "Lisbon";
let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
