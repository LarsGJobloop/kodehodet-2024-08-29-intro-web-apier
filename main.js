const weatherApi =
  "https://api.met.no/weatherapi/locationforecast/2.0/?lat=59.93&lon=10.72&altitude=90";

const response = await fetch(weatherApi); // Send melding til web serveren
const data = await response.json(); // Konvert fra JSON til JavaScript Objekt

console.log(data);
const currentTemprature =
  data.properties.timeseries[0].data.instant.details.air_temperature;
console.log(currentTemprature);

// Oppdater Temperatur
// Finn Weather Element
const temperatureDisplay = document.getElementById("temperature");

// Oppdatere element med dataen
temperatureDisplay.textContent = currentTemprature;

// Oppdater Vind Hastighet
const currentWindSpeed =
  data.properties.timeseries[0].data.instant.details.wind_speed;
console.log(currentWindSpeed);

const windDisplay = document.getElementById("wind-speed");
windDisplay.textContent = currentWindSpeed;
