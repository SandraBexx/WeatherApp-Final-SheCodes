function displayData(response) {
  console.log(response);
  console.log(response.data.temperature.current);
}

//let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
//let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=&${apiKey}&units=metric`;

//let apiKey = "be79f322990c75a1ac80877977e8bf4e";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

let city = "Lisbon";
let apiKey = "3ea3b1bcf6tod7e43390a734fd5a0186";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayData);
